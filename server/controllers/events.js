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
  create_event: async (req, res) => {
    // MODALS
    const { events_services_masters } = models;
    // REQUEST BODY
    const { event_name, service_id, event_id } = req.body;
    let eventId = uuid4();
    if(event_id) eventId = event_id
    const body_params = {
      id: uuid4(),
      event_name: event_name,
      event_id: eventId,
      service_id:service_id,
      created_at: new Date(),
      updated_at: new Date(),
      isActive: true,
    };
    console.log(events_services_masters)
    try {
      
      if (event_name) {
        
        events_services_masters
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
      } else {
        res.status(400).send({ message: "Bad Request" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ message: "internal error", status: 500, error: error });
    }
  },
  get_events: (req, res) => {
    // MODALS
    const { events_services_masters } = models;
    // REQUEST BODY
    const {} = req.body;
    // console.log(events_services_masters)
    try {
      return new Promise((resolve, reject) => {
        events_services_masters
          .findAll({
            include: [
              { model: models.services_master,include:[{model:models.sub_services_master}]}
            ]
          })
          .then((events) => {
            console.log(events,"sdfsfsf")
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
  update_events: (req, res) => {
    // MODALS
    const { events_services_masters } = models;
    // REQUEST BODY
    const { event_id, event_name, service_id } = req.body;
    const body_params = {
      event_name: event_name,
      event_id: event_id,
      service_id:service_id,
      // created_at: new Date(),
      updated_at: new Date(),
    };
    try {
      return new Promise((resolve, reject) => {
        events_services_masters
          .update(body_params, { where: { event_id: event_id } })
          .then((events) => {
            if (events) {
              //Events found
              res.status(200).send({
                message: "Event Updated Successfully!",
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
  delete_events: (req, res) => {
    // MODALS
    const { events_services_masters } = models;
    // REQUEST BODY
    const { event_id } = req.body;

    try {
      return new Promise((resolve, reject) => {
        events_services_masters
          .destroy({ where: { event_id: event_id } })
          .then((events) => {
            if (events) {
              //Events found
              res.status(200).send({
                message: "Event Deleted Successfully!",
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
