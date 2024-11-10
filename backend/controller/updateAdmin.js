const Admin = require('../models/admin');

const UpdateAdmin = async (req, res) => {
    const { email, newPassword } = req.body;
    console.log(email, newPassword);
    try {
       
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: 'Admin not found ..!' });
        }
        if (admin.password === newPassword) {
            return res.status(400).json({ message: 'Old password and new password are the same ..!' });
        }
        admin.password = newPassword;
        await admin.save();
        return res.status(200).json({ message: 'Password Updated ..!' });
    } catch (error) {
    
        return res.status(500).json({ message: 'Something went wrong ..!', error: error.message });
    }
};

module.exports = { UpdateAdmin };
