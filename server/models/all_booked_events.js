'use strict';
module.exports = (sequelize, DataTypes) => {
  const all_booked_events = sequelize.define('all_booked_events', {
    event_id: DataTypes.UUID,
    event_name: DataTypes.STRING,
    event_date: DataTypes.DATE,
    event_location: DataTypes.STRING,
    event_days_count: DataTypes.INTEGER,
    event_status: DataTypes.STRING,
    sub_service_id: DataTypes.UUID,
    service_id: DataTypes.UUID,
    customer_name: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    customer_mobile: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    customer_address: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  all_booked_events.associate = function(models) {
    // associations can be defined here
  };
  return all_booked_events;
};