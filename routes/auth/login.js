const express = require('express');
const router = express.Router();
const {Users} = require('../../models/sequelize')

/* GET home page. */
router.get('/', function (req, res, next) {
    Users.findAll().then(user=>{
        res.json(user);
    })
});

module.exports = router;
