module.exports = (sequelize, type) => sequelize.define('subjects',
  {
    subject_id: {
      type: type.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    subject_name: {
      type: type.STRING,
      allowNull: false,
    },
    subject_credit: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    sequelize,
  },
);
