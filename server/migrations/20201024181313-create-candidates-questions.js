'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidates_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      question_name: {
        type: Sequelize.STRING,
      },
      sub_service_id: {
        type: Sequelize.UUID,
        references:{          
          model:'sub_services_masters',
          key:'sub_service_id'
        }
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
    return queryInterface.dropTable('candidates_questions');
  }
};