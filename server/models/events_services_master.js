'use strict';
module.exports = (sequelize, DataTypes) => {
  const events_services_masters = sequelize.define('events_services_masters', {
    id:{type:DataTypes.UUID,primaryKey:true},
    event_name: DataTypes.STRING,
    event_id: {type:DataTypes.UUID},
    service_id:{type:DataTypes.UUID},
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  events_services_masters.associate = function(models) {
    // associations can be defined here
    
    events_services_masters.belongsTo(models.services_master, {
        onDelete: 'CASCADE', 
        foreignKey: 'service_id'
      });
  };
  return events_services_masters;
};