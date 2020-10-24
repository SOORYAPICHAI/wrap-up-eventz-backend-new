'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('all_booked_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.UUID
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_date: {
        type: Sequelize.DATE
      },
      event_location: {
        type: Sequelize.STRING
      },
      event_days_count: {
        type: Sequelize.INTEGER
      },
      event_status: {
        type: Sequelize.STRING
      },
      sub_service_id: {
        type: Sequelize.UUID
      },
      service_id: {
        type: Sequelize.UUID
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.STRING
      },
      customer_mobile: {
        type: Sequelize.STRING
      },
      customer_email: {
        type: Sequelize.STRING
      },
      customer_address: {
        type: Sequelize.TEXT
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('all_booked_events');
  }
};