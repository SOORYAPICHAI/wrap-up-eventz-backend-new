'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references:{          
          model:'events_masters',
          key:'event_id'
        }
      },
      service_name: {
        type: Sequelize.STRING
      },
      service_id: {
        type: Sequelize.UUID,
        primaryKey: true,
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
    return queryInterface.dropTable('services_masters');
  }
};