'use strict';
module.exports = (sequelize, DataTypes) => {
  const events_master = sequelize.define('events_master', {
    event_name: DataTypes.STRING,
    event_id: {type:DataTypes.UUID,primaryKey:true},
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  events_master.associate = function(models) {
    // associations can be defined here
    // events_master.hasMany(models.services_master, {
    //   onDelete: 'CASCADE',
    //   foreignKey: 'event_id'
    // });
  };
  return events_master;
};