'use strict';
module.exports = (sequelize, DataTypes) => {
  const candidates_answers = sequelize.define('candidates_answers', {
    question_id: DataTypes.UUID,
    answer_id: DataTypes.UUID,
    answer_name: DataTypes.STRING,
    profile_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {});
  candidates_answers.associate = function(models) {
    // associations can be defined here
    candidates_answers.hasMany(models.candidates_questions, {
      onDelete: 'CASCADE',
      foreignKey: 'question_id'
    });
  };
  return candidates_answers;
};