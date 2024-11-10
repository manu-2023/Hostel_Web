//Getting all details for admin dashboard

const Resident = require('../models/resident');

const findResident = async (req,res)=>{
    try {
        const data = await Resident.find();
        return res.status(200).json(data);
    }
    catch(error){
        return res.status(500).json({message :'Something went wrong..!'})

    }
}

module.exports = {findResident};