const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { Users } = require('../../models/sequelize');

const jwtPrivateKey = process.env.PRIVATE_KEY_JWT || '!bE8JX7!owd!W67&XEU9kw2W';

router.post('/', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ where: { username } });
    if (user !== null) {
      const truePassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(password, truePassword);
      if (isPasswordCorrect) {
        const token = jwt.sign({ username }, jwtPrivateKey);
        res.json({ success: true, data: { username, token } });
      } else {
        res.json({
          success: false,
          message: 'Your username or password not correct. Please try again',
        });
      }
    } else {
      res.json({
        success: false,
        message: 'Your username or password not correct. Please try again',
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
