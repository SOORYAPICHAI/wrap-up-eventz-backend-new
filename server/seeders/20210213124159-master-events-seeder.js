"use strict";

const uuid4 = require("uuid4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "events_services_masters",
      [
        {
          id:uuid4(),
          event_name: "Wedding",
          event_id: "05050062-8776-42ba-bdf5-8a1b49e2113c",
          service_id: "2794301f-23fc-4991-aff5-78d2e22156ce",
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
          isActive: true,
        },
        {
          id:uuid4(),
          event_name: "Wedding",
          event_id: "05050062-8776-42ba-bdf5-8a1b49e2113c",
          service_id: "38814bd2-28d2-4c96-958e-ee50affcde2e",
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
          isActive: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('events_services_masters', null, {});
  },
};
