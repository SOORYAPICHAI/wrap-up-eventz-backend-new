'use strict';
module.exports = (sequelize, DataTypes) => {
  const candidates_questions = sequelize.define('candidates_questions', {
    question_id: DataTypes.UUID,
    question_name: DataTypes.STRING,
    sub_service_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  candidates_questions.associate = function(models) {
    // associations can be defined here
    candidates_questions.belongsTo(models.candidates_answers, {
      onDelete: 'CASCADE',
      foreignKey: 'question_id'
    });
  };
  return candidates_questions;
};