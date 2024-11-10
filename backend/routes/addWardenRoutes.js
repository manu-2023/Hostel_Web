const express = require('express')
const router =express.Router();
const {addWardens} = require('../controller/addWardenController')

router.post('/',addWardens);

module.exports = router;