const admin = require('../models/admin');
const warden = require('../models/addWarden');
const kitchendept = require('../models/addWarden');
const resident = require('../models/resident');

const Login = async (req, res) => {
    const { email, password, usertype } = req.body;
    const check= { email, password, usertype };  
    console.log(check);

    try {
        if (usertype == 'admin') {
            const data = await admin.findOne({ email });
            console.log(data);
            if (data) {
                if (data.password == password) {
                    console.log({ message: "Admin", data: admin });
                    return res.status(200).json({ message: "Admin"});
                }
                else {
                    return res.status(400).json({ message: 'Password Mismatched' })
                }
            }
            else {
                return res.status(404).json({ message: "Admin Not Found" });
            }
        }
        if (usertype == 'warden') {
            const data = await warden.findOne({ email });
            console.log(data);
            if (data) {
                if (data.password == password) {
                    return res.status(200).json({ message: "Warden"});

                }
                else {
                    return res.status(400).json({ message: 'Password Mismatched' })
                }
            }
            else {
                return res.status(404).json({ message: "Warden Not Found" });
            }
        }
        if (usertype == 'resident') {
            const data = await resident.findOne({ username: email });
            console.log("Resident data",data);
            if (data) {
                if (data.password == password) {
                    const { password, ...userData } = data.toObject(); // Exclude the password
                    return res.status(200).json({ message: "Resident", data: userData });

                }
                else {
                    return res.status(400).json({ message: 'Password Mismatched' })
                }
            }
            else {
                return res.status(404).json({ message: "Resident Not Found" });
            }
        }
        if (usertype == 'kitchen') {
            const data = await kitchendept.findOne({ kitchendept: email });
            console.log(data);
            if (data) {
                if (data.password == password) {
                    return res.status(200).json({ message: "kitchen" });

                }
                else {
                    return res.status(400).json({ message: 'Password Mismatched' })
                }
            }
            else {
                return res.status(404).json({ message: "Kitchen Dept. Not Found" });
            }
        }




    }
    catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error: error.message });

    }


}


module.exports = {Login};


