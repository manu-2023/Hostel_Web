const express = require('express')
const router = express.Router();
const {getAllAttendance} = require ('../controller/getAttendance')

router.get('/',getAllAttendance);