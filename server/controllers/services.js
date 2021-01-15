const models = require("../models");
var uuid4 = require("uuid4");

function isAlreadyExists(service_name) {
  const { services_master } = models;
  return services_master
    .count({ where: { service_name: service_name } })
    .then((count) => {
      console.log(count);
      if (count !== 0) {
        return true;
      }
      return false;
    });
}

module.exports = {
  create_services: async (req, res) => {
    // MODALS
    const { services_master } = models;
    // REQUEST BODY
    const { service_name, event_id } = req.body;
    const body_params = {
      event_id: event_id,
      service_name: service_name,
      service_id: uuid4(),
      created_at: new Date(),
      updated_at: new Date(),
      isActive: true,
    };
    try {
      if (service_name) {
        if (await isAlreadyExists(service_name)) {
          res.status(200).send({
            message: `Service Name:${service_name} Already Exists!`,
            status: 200,
          });
        } else {
          services_master
            .create(body_params)
            .then((val) => {
              res.status(200).send({
                message: "Service Created Successfully!",
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
  get_services: (req, res) => {
    // MODALS
    const { services_master, events_master } = models;
    // REQUEST BODY
    const {} = req.body;
    try {
      return new Promise((resolve, reject) => {
        services_master
          .findAll({
            include: [{ model: events_master }],
          })
          .then((services) => {
            if (services) {
              //services found
              res.status(200).send({
                message: "Service Fetched Successfully!",
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
              .send({ message: "internal error", status: 500, error: error });
            reject(null);
          });
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },
  update_services: async (req, res) => {
    // MODALS
    const { services_master } = models;
    // REQUEST BODY
    const { service_name, service_id } = req.body;
    const body_params = {
      service_name: service_name,

      updated_at: new Date(),
    };
    try {
      if (service_name) {
        services_master
          .update(body_params, {where: { service_id: service_id }} )
          .then((val) => {
            res.status(200).send({
              message: "Service Updated Successfully!",
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
  },
  delete_services: async (req, res) => {
    // MODALS
    const { services_master } = models;
    // REQUEST BODY
    const { service_id } = req.body;

    try {
      if (service_id) {
        services_master
          .destroy({ where: { service_id: service_id } })
          .then((val) => {
            res.status(200).send({
              message: "Service Deleted Successfully!",
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
  },
};
