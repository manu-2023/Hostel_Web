const addWarden = require('../models/addWarden');
const { sendMail } = require('../Middlewear/sendMail');
const addWardens = async (req, res) => {
    const { name, email, phone, address, password } = req.body;

    try {
        const existingEmail = await addWarden.findOne({ email });
        if (existingEmail) {
            console.error('Email already exists');
            return res.status(400).json({ message: 'Email already exists' });
        }
    
        const existingNumber = await addWarden.findOne({ phone });
        if (existingNumber) {
            console.error('Contact number already registered');
            return res.status(400).json({ message: 'Contact number has been registered' });
        }
    
        const data = new addWarden({ name, email, phone, address, password });
        console.log('Saving data:', data);
    
        await data.save();
    
        await sendMail(
            email, 
            "Welcome to Hostel Warden", 
            `Hi ${name},      
            Please use the following credentials to log in:
            Email : ${email}
            Password : ${password}
            Note : The credentials for both the Hostel Warden and Kitchen Department are the same. 
            Best regards,  
            The Hostel Food  Management System`
        );
    
        return res.status(200).json({ message: 'Account successfully created!' });
    
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
}    

module.exports = { addWardens };

