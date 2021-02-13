"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

    return queryInterface.bulkInsert(
      "services_masters",
      [
        {
          service_name: "Photography",
          service_id: "2794301f-23fc-4991-aff5-78d2e22156ce",
          isActive: true,
          createdAt:new Date(),
          updatedAt:new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          service_name: "Decorators",
          service_id: "261d0e5d-3d43-4aa5-8e88-e04db8eba675",
          isActive: true,
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          service_name: "Catering",
          service_id: "38814bd2-28d2-4c96-958e-ee50affcde2e",
          isActive: true,
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          service_name: "Venues",
          service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
          isActive: true,
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          service_name: "Make Up",
          service_id: "0bead504-f2be-44c7-9d23-42b5a33b64fd",
          isActive: true,
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          service_name: "Music & Dance",
          service_id: "a5bc807f-abd7-408c-9d30-80b5e77616f0",
          isActive: true,
          created_at: new Date(),
          updated_at: new Date(),
          createdAt:new Date(),
          updatedAt:new Date(),
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
    return queryInterface.bulkDelete("services_masters", null, {});
  },
};
