const models = require("../models");

module.exports = {
  get_header_data: (req, res) => {
    // MODALS
    const {
      events_services_masters,
      services_master,
      sub_services_master,
    } = models;
    // REQUEST BODY
    const {} = req.body;
    // console.log(events_services_masters)
    try {
      return new Promise((resolve, reject) => {
        events_services_masters
          .findAll({
            where:{isActive:true},
            include: [
              {
                model: models.services_master,
                include: [{ model: models.sub_services_master }],
              },
            ],
          })
          .then((events) => {
            services_master
              .findAll({
                where:{isActive:true},
                include: [{ model: sub_services_master }],
              })
              .then((services) => {
                if (services) {
                  //services found
                  res.status(200).send({
                    message: "Header data Fetched Successfully!",
                    status: 200,
                    data: { services, events },
                  });
                  resolve(services);
                } else {
                  res.status(400).send({ message: "Bad Request" });
                  reject(null);
                }
              })
              .catch((err) => {
                console.log(err);
                res.status(500).send({
                  message: "internal error",
                  status: 500,
                  error: error,
                });
                reject(null);
              });
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
};
