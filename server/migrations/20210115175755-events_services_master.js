"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("events_services_masters", {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      event_id: {
        type: Sequelize.UUID,
      },

      event_name: {
        type: Sequelize.STRING,
      },
      service_id: {
        type: Sequelize.UUID,
        onDelete:"CASCADE",
        references:{          
          model:'services_masters',
          key:'service_id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("events_services_masters");
  },
};
