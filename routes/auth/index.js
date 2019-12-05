const express = require('express');

const router = express.Router();
const loginRouter = require('./login');
const registerRouter = require('./register');

const saltRounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS, 10) : 10;

router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;
