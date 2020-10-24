'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidates_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references:{          
          model:'candidates_questions',
          key:'question_id'
        }
      },
      answer_id: {
        type: Sequelize.UUID
      },
      answer_name: {
        type: Sequelize.STRING
      },
      profile_id: {
        type: Sequelize.UUID
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
    return queryInterface.dropTable('candidates_answers');
  }
};