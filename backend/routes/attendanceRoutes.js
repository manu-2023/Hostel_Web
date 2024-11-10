const express = require('express');
const router = express.Router();
const { getAllAttendance } = require('../controller/getAttendance'); // Ensure this path is correct

router.get('/', getAllAttendance); // Now accessible at /getAttendance

module.exports = router;
