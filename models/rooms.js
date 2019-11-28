module.exports = (sequelize, type) => sequelize.define('rooms',
  {
    room_id: {
      type: type.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    room_name: {
      type: type.STRING,
    },
    total_slot: {
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
