const userController = require("../controllers");

module.exports = (app) => {
  console.log("app", app);
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Wrap-up-eventz API!",
    })
  );
  app.post("/api/create-event", userController.create_event);
  app.get("/api/get-events", userController.get_events);
  app.post("/api/update-event", userController.update_events);
  app.post("/api/delete-event", userController.delete_events);
  app.post("/api/create-service", userController.create_services);
  app.get("/api/get-services", userController.get_services);
  app.post("/api/update-service", userController.update_services);
  app.post("/api/delete-service", userController.delete_services);
  app.post("/api/create-sub-service", userController.create_sub_services);
  app.get("/api/get-sub-services", userController.get_sub_services);
  app.post("/api/update-sub-service", userController.update_sub_services);
  app.post("/api/delete-sub-service", userController.delete_sub_services);
  app.get("/api/create-questions", userController.create_questions);
  app.get("/api/get-questions", userController.get_questions);
  app.post("/api/post-answers", userController.post_answers);
  app.post("/api/register", userController.create_registration);
  app.get("/api/all-registers", userController.get_all_registrations);
  app.get("/api/get-register-based-id", userController.get_respective_registration);
  app.post("/api/signature", userController.signature);
  app.delete("/api/delete/*", userController.deleteFile);
};
