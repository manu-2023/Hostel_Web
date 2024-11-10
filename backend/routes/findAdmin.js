const express = require('express');
const router = express.Router();
const { findAdmin } = require('../controller/adminFind'); // Ensure the path is correct

// Route for finding an admin by email
router.get('/:email', findAdmin);

module.exports = router;
