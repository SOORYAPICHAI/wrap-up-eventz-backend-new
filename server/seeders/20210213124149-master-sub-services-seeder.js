"use strict";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "sub_services_masters",
        [
          {
            id: 1,
            sub_service_id: uuidv4(),
            sub_service_name: "DJs",
            service_id: "a5bc807f-abd7-408c-9d30-80b5e77616f0",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            sub_service_id: uuidv4(),
            sub_service_name: "Sangeet Choreographer",
            service_id: "a5bc807f-abd7-408c-9d30-80b5e77616f0",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            sub_service_id: uuidv4(),
            sub_service_name: "Wedding Entertainment",
            service_id: "a5bc807f-abd7-408c-9d30-80b5e77616f0",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            sub_service_id: uuidv4(),
            sub_service_name: "Home Catering",
            service_id: "38814bd2-28d2-4c96-958e-ee50affcde2e",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            sub_service_id: uuidv4(),
            sub_service_name: "Chaat & Food Stalls",
            service_id: "38814bd2-28d2-4c96-958e-ee50affcde2e",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 6,
            sub_service_id: uuidv4(),
            sub_service_name: "Catering Services",
            service_id: "38814bd2-28d2-4c96-958e-ee50affcde2e",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            sub_service_id: uuidv4(),
            sub_service_name: "Banquet Halls",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 8,
            sub_service_id: uuidv4(),
            sub_service_name: "Lawns / Farmhouses",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 9,
            sub_service_id: uuidv4(),
            sub_service_name: "Resorts",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 10,
            sub_service_id: uuidv4(),
            sub_service_name: "Small Function Halls",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 11,
            sub_service_id: uuidv4(),
            sub_service_name: "Kalyan Mandapam",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 12,
            sub_service_id: uuidv4(),
            sub_service_name: "4 Star & Above Hotels",
            service_id: "e206bfba-82d1-4198-9dc1-442b9a6e9427",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 13,
            sub_service_id: uuidv4(),
            sub_service_name: "Banquet Halls",
            service_id: "261d0e5d-3d43-4aa5-8e88-e04db8eba675",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 14,
            sub_service_id: uuidv4(),
            sub_service_name: "Decorators",
            service_id: "261d0e5d-3d43-4aa5-8e88-e04db8eba675",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 15,
            sub_service_id: uuidv4(),
            sub_service_name: "Bridal Makeup",
            service_id: "0bead504-f2be-44c7-9d23-42b5a33b64fd",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 16,
            sub_service_id: uuidv4(),
            sub_service_name: "Family Makeup",
            service_id: "0bead504-f2be-44c7-9d23-42b5a33b64fd",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 17,
            sub_service_id: uuidv4(),
            sub_service_name: "Candid",
            service_id: "2794301f-23fc-4991-aff5-78d2e22156ce",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 18,
            sub_service_id: uuidv4(),
            sub_service_name: "Traditional",
            service_id: "2794301f-23fc-4991-aff5-78d2e22156ce",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 19,
            sub_service_id: uuidv4(),
            sub_service_name: "Both",
            service_id: "2794301f-23fc-4991-aff5-78d2e22156ce",
            isActive: true,
            created_at: new Date(),
            updated_at: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
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
    return queryInterface.bulkDelete("sub_services_masters", null, {});
  },
};
