const {UpdateAdmin} = require ('../controller/updateAdmin')
const express = require ('express')
const router =express.Router();

router.put('/',UpdateAdmin);

module.exports=router;
