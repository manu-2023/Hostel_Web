const { updateWarden } = require('../controller/updateWarden'); 
const express = require('express');
const router = express.Router();

router.put('/', updateWarden);

module.exports = router;
