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
const insert_each_question_answer_into_the_table = (
  body_params,
  questions_answers
) => {
  console.log(questions_answers,"questions_answers--")
  if(questions_answers && questions_answers.length>0){

    return questions_answers.map((val) => {
      console.log(val,"q")
     return new Promise((resolve, reject) => {
        models.registrations
          .create({ ...body_params, answer: val.answer, question: val.question, registration_id: uuid4() })
          .then((val) => {
            resolve(val);
          })
          .catch((err) => {
            console.log(err);
            reject(null);
          });
      });
    });
  }
};
module.exports = {
  create_registration: async (req, res) => {
    // MODALS
    // REQUEST BODY
    const {
      sub_service_name,
      sub_service_id,
      profile_pic,
      name,
      dob,
      gender,
      email,
      phone_number,
      city_state,
      pincode,
      questions_answers
    } = req.body;
    console.log(req.body.questions_answers)
    const body_params = {
      sub_service_name: sub_service_name,
      sub_service_id: sub_service_id,
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
      is_selected: false,
      mail_sms_sent: false,
    };
    try {
      if (
        sub_service_name &&
        sub_service_id &&
        questions_answers&&
        profile_pic &&
        name &&
        dob &&
        gender &&
        email &&
        phone_number &&
        city_state &&
        pincode
      ) {
        Promise.all(
          insert_each_question_answer_into_the_table(
            body_params,
            questions_answers
          )
        ).then((responses) =>
          res.status(200).send({
            message: "Registered Successfully!",
            status: 200,
            data: responses,
          })
        );
      } else {
        res.status(400).send({ message: "Bad Request" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },
  get_all_registrations: (req, res) => {
    // MODALS
    // REQUEST BODY
    const {registrations, sub_services_master, services_master,events_master} = models
    try {
      return new Promise((resolve, reject) => {
        registrations
          .findAll({
            include:[
                {model:sub_services_master,
                    include:[{
                        model:services_master,
                        include:[{
                          model:events_master
                      }]
                    }]
                }
            ]
        })
          .then((sub_services) => {
            if (sub_services) {
              //Events found
              res.status(200).send({
                message: "Registration details Fetched Successfully!",
                status: 200,
                data: sub_services,
              });
              resolve(sub_services);
            } else {
              res.status(400).send({ message: "Bad Request" });
              reject(null);
            }
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "internal error", status: 500, error: err });
            reject(null);
          });
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },
  get_respective_registration: (req, res) => {
    // MODALS
    // REQUEST BODY
    const {registration_id} = req.body
    const {registrations, sub_services_master, services_master, events_master} = models
    try {
      return new Promise((resolve, reject) => {
        registrations
          .findAll({
            where:{registration_id:registration_id},
            include:[
                {model:sub_services_master,
                    include:[{
                        model:services_master,
                        include:[{
                          model:events_master
                      }]
                    }]
                }
            ]
        })
          .then((sub_services) => {
            if (sub_services) {
              //Events found
              res.status(200).send({
                message: "Registration details Fetched Successfully!",
                status: 200,
                data: sub_services,
              });
              resolve(sub_services);
            } else {
              res.status(400).send({ message: "Bad Request" });
              reject(null);
            }
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "internal error", status: 500, error: err });
            reject(null);
          });
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  }
};
