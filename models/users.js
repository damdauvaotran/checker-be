module.exports = (sequelize, type) => sequelize.define('users',
  {
    user_id: {
      type: type.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    role: {
      type: type.INTEGER,
      allowNull: false,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: type.DATE,
    },
    city: {
      type: type.STRING,
    },
    country: {
      type: type.STRING,
    },
    create_date: {
      type: type.DATE,
    },
    last_update: {
      type: type.DATE,
    },
  },
  {
    underscored: true,
    timestamps: false,
    sequelize,
  },
);
