module.exports = (sequelize, type) => sequelize.define('exam_shifts',
  {
    exam_shift_id: {
      type: type.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    room_id: {
      type: type.BIGINT,
      allowNull: false,
    },
    subject_id: {
      type: type.BIGINT,
      allowNull: false,
    },
    exam_date: {
      type: type.DATE,
    },
  }, {
    underscored: true,
    timestamps: false,
    sequelize,
  },
);
