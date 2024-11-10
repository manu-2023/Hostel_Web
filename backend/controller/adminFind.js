const Admin = require('../models/admin'); // Ensure the path is correct

const findAdmin = async (req, res) => {
    const { email } = req.params; // Extract email from URL parameters
    const sanitizedEmail = email.trim(); // Remove any leading/trailing whitespace

    try {
        const admin = await Admin.findOne({ email: sanitizedEmail }); // Query the Admin collection
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json(admin); // Return the found admin
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
};

module.exports = { findAdmin };
