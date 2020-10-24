'use strict';
module.exports = (sequelize, DataTypes) => {
  const sub_services_master = sequelize.define('sub_services_master', {
    sub_service_id: {type:DataTypes.UUID,primaryKey:true},
    sub_service_name: DataTypes.STRING,
    service_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  sub_services_master.associate = function(models) {
    // associations can be defined here
    sub_services_master.belongsTo(models.services_master, {
      onDelete: 'CASCADE',
      foreignKey: 'service_id'
    });
    sub_services_master.hasMany(models.sub_services_profile, {
      onDelete: 'CASCADE',
      foreignKey: 'service_id'
    });
    
  };
  return sub_services_master;
};