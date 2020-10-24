const userController = require("../controllers");

module.exports = (app) => {
  console.log("app", app);
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Wrap-up-eventz API!",
    })
  );
  app.get("/api/create-event", userController.create_event
  );
  app.get("/api/get-events", userController.get_events
  );
  app.get("/api/create-services", userController.create_services
  );
  app.get("/api/get-services", userController.get_services
  );
  app.get("/api/create-sub-services", userController.create_sub_services
  );
  app.get("/api/get-sub-services", userController.get_sub_services
  );
};
