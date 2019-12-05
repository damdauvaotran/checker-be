const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const { Users } = require('../../models/sequelize');

const saltRounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS, 10) : 10;

router.post('/', async (req, res) => {
  const {
    username, password, name, city, mssv, country,
  } = req.body;
  try {
    const duplicatedUserList = await Users.findAll({ where: { username } });
    if (duplicatedUserList.length === 0) {
      const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds, 10));
      await Users.build({
        username,
        password: hashedPassword,
        name,
        mssv,
        city,
        role: 1,
        country,
      }).save();
      res.json({
        success: true,
        data: {
          username,
          name,
          mssv,
        },
      });
    } else {
      res.json({
        success: false,
        data: null,
        message: {
          vi: 'Tên đăng nhập đã tồn tại',
        },
      });
    }
  } catch (e) {
    res.json({
      success: false,
      data: null,
      message: {
        error: e,
      },
    });
  }
});


module.exports = router;
