// REFER THIS DOCUMENTATION
// https://github.com/FineUploader/server-examples/blob/master/nodejs/s3/s3handler.js

var AWS = require("aws-sdk");
var CryptoJS = require("crypto-js");

const myBucket = "wrapupeventzimages";
const accessKey = "AKIAIYAYQXPOJNQFHFFA";
const secretAccessKey = "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";
const myKey = "da789e3b-1d9a-4ea2-a97b-e67e1be11169.jpg";
const signedUrlExpireSeconds = 60 * 5; // In 5 minutes
const expectedMinSize = null,
  expectedMaxSize = null;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretAccessKey,
});

var s3 = new AWS.S3();
// {
// endpoint: new AWS.Endpoint('https://wrapupeventzimages.s3.ap-south-1.amazonaws.com'),
// s3ForcePathStyle: true //prevent an SSL certificate error
// }

var params = {
  Bucket: myBucket,
  Key: myKey,
  Expires: signedUrlExpireSeconds,
};

// Signs any requests.  Delegate to a more specific signer based on type of request.
function signRequest(req, res) {
  if (req.body.headers) {
    signRestRequest(req, res);
  } else {
    signPolicy(req, res);
  }
}

// Signs "simple" (non-chunked) upload requests.
function signPolicy(req, res) {
  var policy = req.body,
    base64Policy = new Buffer.from(JSON.stringify(policy)).toString("base64"),
    signature = signV4Policy(policy, base64Policy);

  var jsonResponse = {
    policy: base64Policy,
    signature: signature,
  };

  res.setHeader("Content-Type", "application/json");

  if (isPolicyValid(req.body)) {
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.status(400);
    res.end(JSON.stringify({ invalid: true }));
  }
}
function signV2Policy(base64Policy) {
  return getV2SignatureKey(secretAccessKey, base64Policy);
}

function signV4Policy(policy, base64Policy) {
  var conditions = policy.conditions,
    credentialCondition;

  console.log(conditions);
  for (var i = 0; i < conditions.length; i++) {
    credentialCondition = conditions[i]["x-amz-credential"];
    if (credentialCondition != null) {
      break;
    }
  }
  console.log(credentialCondition);
  var matches = /.+\/(.+)\/(.+)\/s3\/aws4_request/.exec(credentialCondition);
  return getV4SignatureKey(
    secretAccessKey,
    matches[1],
    matches[2],
    "s3",
    base64Policy
  );
}

function getV2SignatureKey(key, stringToSign) {
  var words = CryptoJS.HmacSHA1(stringToSign, key);
  return CryptoJS.enc.Base64.stringify(words);
}

function getV4SignatureKey(
  key,
  dateStamp,
  regionName,
  serviceName,
  stringToSign
) {
  var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key),
    kRegion = CryptoJS.HmacSHA256(regionName, kDate),
    kService = CryptoJS.HmacSHA256(serviceName, kRegion),
    kSigning = CryptoJS.HmacSHA256("aws4_request", kService);

  return CryptoJS.HmacSHA256(stringToSign, kSigning).toString();
}

// the top of this file to disable size validation on the policy document.
function isPolicyValid(policy) {
  var bucket, parsedMaxSize, parsedMinSize, isValid;

  policy.conditions.forEach(function (condition) {
    if (condition.bucket) {
      bucket = condition.bucket;
    } else if (
      condition instanceof Array &&
      condition[0] === "content-length-range"
    ) {
      parsedMinSize = condition[1];
      parsedMaxSize = condition[2];
    }
  });

  isValid = bucket === myBucket;

  // If expectedMinSize and expectedMax size are not null (see above), then
  // ensure that the client and server have agreed upon the exact same
  // values.
  if (expectedMinSize != null && expectedMaxSize != null) {
    isValid =
      isValid &&
      parsedMinSize === expectedMinSize.toString() &&
      parsedMaxSize === expectedMaxSize.toString();
  }

  return isValid;
}

// Signs multipart (chunked) requests.  Omit if you don't want to support chunking.
function signRestRequest(req, res) {
  var version = req.query.v4 ? 4 : 2,
    stringToSign = req.body.headers,
    signature =
      version === 4
        ? signV4RestRequest(stringToSign)
        : signV2RestRequest(stringToSign);

  var jsonResponse = {
    signature: signature,
  };

  res.setHeader("Content-Type", "application/json");

  if (isValidRestRequest(stringToSign, version)) {
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.status(400);
    res.end(JSON.stringify({ invalid: true }));
  }
}

function deleteFile(bucket, key, callback) {
    callS3("delete", {
        bucket: bucket,
        key: key
    }, callback);
}

function callS3(type, spec, callback) {
    s3[type + "Object"]({
        Bucket: spec.bucket,
        Key: spec.key
    }, callback)
}
module.exports = {
  signature: (req, res) => {
    try {
      //Download URL

      //Upload URL

      return new Promise((resolve, reject) => {
        if (typeof req.query.success !== "undefined") {
          verifyFileInS3(req, res);
        } else {
          signRequest(req, res);
        }
        // var url = s3.getSignedUrl('getObject', params);
        // console.log('The URL is', url);
        //     res.status(200).send( url);
        resolve(true);
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
    reject(null);
  },
  deleteFile: (req, res) => {
    deleteFile(req.query.bucket, req.query.key, function (err) {
      console.log("req.query.bucket", req.query.bucket);
      console.log("--------");
      console.log("req.query.key", req.query.key);
      if (err) {
        console.log("Problem deleting file: " + err);
        res.status(500);
      }
      res.end();
    });
  },
};
