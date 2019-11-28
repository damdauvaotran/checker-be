const Sequelize = require('sequelize');

const sequelize = new Sequelize('math_app', 'root', '12345678', {
  dialect: 'mysql',
});


const Users = sequelize.define('users', {
  user_id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  encrypted_password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_active: {
    type: Sequelize.INTEGER,
  },


}, {
  createdAt: false,
  updatedAt: false,
  sequelize,
});
