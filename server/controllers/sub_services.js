const models = require("../models");
var uuid4 = require("uuid4");

const { sub_services_master, services_master } = models;
function isAlreadyExists(sub_service_name) {
  return sub_services_master
    .count({ where: { sub_service_name: sub_service_name } })
    .then((count) => {
      console.log(count);
      if (count !== 0) {
        return true;
      }
      return false;
    });
}

module.exports = {
  create_sub_services: async (req, res) => {
    // MODALS
    // REQUEST BODY
    const { sub_service_name, service_id } = req.body;
    const body_params = {
      sub_service_id: uuid4(),
      sub_service_name: sub_service_name,
      service_id: service_id,
      created_at: new Date(),
      updated_at: new Date(),
      isActive: true,
    };
    try {
      if (sub_service_name) {
        if (await isAlreadyExists(sub_service_name)) {
          res.status(200).send({
            message: `Service Name:${sub_service_name} Already Exists!`,
            status: 200,
          });
        } else {
          sub_services_master
            .create(body_params)
            .then((val) => {
              res.status(200).send({
                message: "Sub - Service Created Successfully!",
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
        }
      } else {
        res.status(400).send({ message: "Bad Request" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },
  get_sub_services: (req, res) => {
    // MODALS
    // REQUEST BODY
    try {
      return new Promise((resolve, reject) => {
        sub_services_master
          .findAll({
            include:[
                {model:services_master,
                    include:[{
                        model:models.events_master
                    }]
                }
            ]
        })
          .then((sub_services) => {
            if (sub_services) {
              //Events found
              res.status(200).send({
                message: "Sub Service Fetched Successfully!",
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
};
