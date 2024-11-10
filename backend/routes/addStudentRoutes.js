const express =require('express')
const router = express.Router();
const {AddAllStudents}=require('../controller/addStudent');

router.post('/',AddAllStudents);

module.exports=router;