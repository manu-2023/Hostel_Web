const Resident = require('../models/addWarden');

const updateWarden = async (req, res) => {
    const { email, newPassword } = req.body;
    console.log(email, newPassword);
    try {
        const warden = await Resident.findOne({ email });

        if (!warden) {
            return res.status(400).json({ message: 'Warden not found ..!' });
        }
        if (warden.password === newPassword) {
            return res.status(400).json({ message: 'Old password and new password are the same ..!' });
        }
        
        warden.password = newPassword;
        await warden.save();
        
        return res.status(200).json({ message: 'Password Updated ..!' });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong ..!', error: error.message });
    }
};

module.exports = { updateWarden };
