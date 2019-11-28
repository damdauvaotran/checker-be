module.exports = (sequelize, type) => sequelize.define('exam_registration',
  {
    exam_registration_id: {
      type: type.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: type.BIGINT,
      allowNull: false,
    },
    exam_shift_id: {
      type: type.BIGINT,
      allowNull: false,
    },
  }, {
    underscored: true,
    timestamps: false,
    sequelize,
  },
);
