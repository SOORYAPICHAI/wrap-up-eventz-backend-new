const user = require('./user');
const {create_event, get_events} = require('./events');
const {create_services,get_services} = require('./services');
const {create_sub_services, get_sub_services} = require('./sub_services');
module.exports = {
  user,
  create_event,
  get_events,
  get_services,
  create_services,
  create_sub_services,
  get_sub_services
};
