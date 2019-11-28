module.exports = (sequelize, type) => sequelize.define('leaning_state',
  {
    learning_state_id: {
      type: type.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: type.BIGINT,
      allowNull: false,
    },
    subject_id: {
      type: type.BIGINT,
      allowNull: false,
    },
    mid_score: {
      type: type.INTEGER,
      allowNull: false,
    },
    num_absent: {
      type: type.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    timestamps: false,
    sequelize,
  },
);
