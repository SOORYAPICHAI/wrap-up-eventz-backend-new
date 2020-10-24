'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_users = sequelize.define('master_users', {
    email_id: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    hashed_password: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    underscored: true,
    schema:'auth'
  });
  master_users.associate = function(models) {
    // associations can be defined here
  };
  return master_users;
};