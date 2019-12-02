const express = require("express");

const router = express.Router();
const { Users } = require("../../models/sequelize");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({
    success: true,
    payload: {
      req
    }
  });
  Users.findAll().then(user => {
    res.json(user);
  });
});

module.exports = router;
