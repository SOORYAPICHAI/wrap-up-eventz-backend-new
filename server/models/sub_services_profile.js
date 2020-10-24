'use strict';
module.exports = (sequelize, DataTypes) => {
  const sub_services_profile = sequelize.define('sub_services_profile', {
    sub_service_id: DataTypes.UUID,
    profile_id: {type:DataTypes.UUID,primaryKey:true},
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    email_id: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.TEXT),
    about: DataTypes.TEXT,
    services_offered: DataTypes.ARRAY(DataTypes.TEXT),
    industry_experience: DataTypes.ARRAY(DataTypes.TEXT),
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  sub_services_profile.associate = function(models) {
    // associations can be defined here
    sub_services_profile.belongsTo(models.sub_services_master, {
      onDelete: 'CASCADE',
      foreignKey: 'sub_service_id'
    });
  };
  return sub_services_profile;
};