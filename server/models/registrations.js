"use strict";
module.exports = (sequelize, DataTypes) => {
  const registrations = sequelize.define(
    "registrations",
    {
      id: {type:DataTypes.UUID,primaryKey:true},
      event_name: DataTypes.STRING,
      event_id: DataTypes.UUID,
      service_name: DataTypes.STRING,
      service_id: DataTypes.UUID,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      name: DataTypes.STRING,
      dob: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      city_state: DataTypes.STRING,
      pincode: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      is_selected: DataTypes.BOOLEAN,
      mail_sms_sent: DataTypes.BOOLEAN,
    },
    {}
  );
  registrations.associate = function (models) {
    // associations can be defined here
  };
  return registrations;
};
