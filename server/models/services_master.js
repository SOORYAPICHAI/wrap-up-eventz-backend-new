'use strict';
module.exports = (sequelize, DataTypes) => {
  const services_master = sequelize.define('services_master', {
    event_id: DataTypes.UUID,
    service_name: DataTypes.STRING,
    service_id: {type:DataTypes.UUID,primaryKey:true},
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  services_master.associate = function(models) {
    // associations can be defined here
    services_master.belongsTo(models.events_master, {
      onDelete: 'CASCADE',
      foreignKey: 'event_id'
    });
    services_master.hasMany(models.sub_services_master, {
      onDelete: 'CASCADE',
      foreignKey: 'service_id'
    });
  };
  return services_master;
};