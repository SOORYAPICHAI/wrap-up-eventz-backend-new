"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("registrations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      registration_id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      sub_service_name: {
        type: Sequelize.STRING,
      },
      sub_service_id: {
        type: Sequelize.UUID,
      },
      question: {
        type: Sequelize.STRING,
      },
      answer: {
        type: Sequelize.STRING,
      },
      profile_pic: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      city_state: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      is_selected: {
        type: Sequelize.BOOLEAN,
      },
      mail_sms_sent: {
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
    return queryInterface.dropTable("registrations");
  },
};
