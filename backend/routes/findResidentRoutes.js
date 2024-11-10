const express =require('express')
const router = express.Router();
const {findResident} = require('../controller/findStudents');

router.get("/",findResident);

module.exports=router;