const models = require("../models");
var uuid4 = require("uuid4");

function isAlreadyExists(event_name) {
  const { registrations } = models;
  return registrations
    .count({ where: { event_name: event_name } })
    .then((count) => {
      console.log(count);
      if (count !== 0) {
        return true;
      }
      return false;
    });
}

module.exports = {
    create_candidate: async (req, res) => {
    // MODALS
    const { registrations } = models;
    // REQUEST BODY
    const {
      event_name,
      event_id,
      service_name,
      service_id,
      question,
      answer,
      profile_pic,
      name,
      dob,
      gender,
      email,
      phone_number,
      city_state,
      pincode,
      is_selected,
      mail_sms_sent,
    } = req.body;
    const body_params = {
      id: uuid4(),
      event_name: event_name,
      event_id: event_id,
      service_name: service_name,
      service_id: service_id,
      question: question,
      answer: answer,
      profile_pic: profile_pic,
      name: name,
      dob: dob,
      gender: gender,
      email: email,
      phone_number: phone_number,
      city_state: city_state,
      pincode: pincode,
      created_at: new Date(),
      updated_at: new Date(),
      is_selected: is_selected,
      mail_sms_sent: mail_sms_sent,
    };
    try {
      if (event_name) {
        registrations
          .create(body_params)
          .then((val) => {
            res.status(200).send({
              message: "Registered Successfully!",
              status: 200,
              data: val,
            });
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "internal error", status: 500, err: err });
          });
      } else {
        res.status(400).send({ message: "Bad Request" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  }

};
