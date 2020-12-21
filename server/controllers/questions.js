const models = require("../models");
var uuid4 = require("uuid4");

function isAlreadyExists(event_name) {
  const { events_master } = models;
  return events_master
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
    create_questions: async (req, res) => {
    // MODALS
    const { events_master } = models;
    // REQUEST BODY
    const { event_name } = req.body;
    const body_params = {
      event_name: event_name,
      event_id: uuid4(),
      created_at: new Date(),
      updated_at: new Date(),
      isActive: true,
    };
    try {
      if (event_name) {
        if (await isAlreadyExists(event_name)) {
          res.status(200).send({
            message: `Event_Name:${event_name} Already Exists!`,
            status: 200,
          });
        } else {
          events_master
            .create(body_params)
            .then((val) => {
              res.status(200).send({
                message: "Event Created Successfully!",
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
  get_questions: (req, res) => {
    // MODALS
    const { events_master } = models;
    // REQUEST BODY
    const {} = req.body;
    try {
      return new Promise((resolve, reject) => {
        models.events_master
          .findAll()
          .then((events) => {
            if (events) {
              //Events found
              res.status(200).send({
                message: "Event Fetched Successfully!",
                status: 200,
                data: events,
              });
              resolve(events);
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
};
