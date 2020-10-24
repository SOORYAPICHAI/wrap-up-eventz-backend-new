'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sub_services_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_service_id: {
        type: Sequelize.UUID,
        references:{          
          model:'sub_services_masters',
          key:'sub_service_id'
        }
      },
      profile_id: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      mobile_number: {
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      about: {
        type: Sequelize.TEXT
      },
      services_offered: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      industry_experience: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
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
    return queryInterface.dropTable('sub_services_profiles');
  }
};