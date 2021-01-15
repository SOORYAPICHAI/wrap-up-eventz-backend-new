const user = require("./user");
const {
  create_event,
  get_events,
  update_events,
  delete_events,
} = require("./events");
const {
  create_services,
  get_services,
  update_services,
  delete_services,
} = require("./services");
const {
  create_sub_services,
  get_sub_services,
  update_sub_services,
  delete_sub_services,
} = require("./sub_services");
const { create_questions, get_questions } = require("./questions");
const { post_answers } = require("./answers");
const {
  create_registration,
  get_all_registrations,
  get_respective_registration,
} = require("./register");
const { signature, deleteFile } = require("./signature");
module.exports = {
  user,
  create_event,
  get_events,
  update_events,
  delete_events,
  get_services,
  create_services,
  update_services,
  delete_services,
  create_sub_services,
  get_sub_services,
  update_sub_services,
  delete_sub_services,
  create_questions,
  get_questions,
  post_answers,
  create_registration,
  get_all_registrations,
  get_respective_registration,
  signature,
  deleteFile,
};
