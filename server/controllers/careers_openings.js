const models = require("../models");

module.exports = {
  get_careeropenings: (req, res) => {
    // MODALS
    const { services_master, events_master } = models;
    // REQUEST BODY
    const {} = req.body;
    try {
      return new Promise((resolve, reject) => {
        services_master
          .findAll({
            where: { isHiring: true },
            include: [{ model: events_master }],
          })
          .then((services) => {
            if (services) {
              //services found
              res.status(200).send({
                message: "Career Openings Fetched Successfully!",
                status: 200,
                data: services,
              });
              resolve(services);
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
  update_careeropenings: async (req, res) => {
    // MODALS
    const { services_master, sub_services_master } = models;
    // REQUEST BODY
    const {
      service_id,
      sub_service_id,
      service_is_hiring,
      sub_service_is_hiring,
    } = req.body;

    try {
      if (
        service_id &&
        sub_service_id &&
        service_is_hiring &&
        sub_service_is_hiring
      ) {
        services_master
          .update(
            { isHiring: service_is_hiring },
            { where: { service_id: service_id } }
          )
          .then((val) => {
            sub_services_master
              .update(
                { isHiring: sub_service_is_hiring },
                { where: { sub_service_id: sub_service_id } }
              )
              .then(() => {
                res.status(200).send({
                  message: "Career Openings Updated Successfully!",
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
  },
};
