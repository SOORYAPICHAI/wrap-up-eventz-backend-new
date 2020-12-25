const models = require("../models");

module.exports = {
  post_answers: async (req, res) => {
    // MODALS
    // REQUEST BODY
    console.clear()
console.log(req.body,"reqreqreqreqreq")
    try {
      res.status(200).send({
        message: req.body,
        status: 200,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },

};
