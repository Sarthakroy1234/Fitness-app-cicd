const express = require('express');
const router=express.Router();
const addData = require('../Controller/user.controller.js').addData;

router.post('/putdata',addData);

module.exports = router;