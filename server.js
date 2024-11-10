const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const attendanceRoute = require('./routes/attendanceRoutes');
const addStudents = require('./routes/addStudentRoutes');
const addWardens = require ('./routes/addWardenRoutes');
const updateAdmin = require('./routes/updateAdmin');
const findAdmin = require('./routes/findAdmin');
const Login = require('./routes/loginRoutes');
const findResident = require("./routes/findResidentRoutes");
const mealSelectionRoutes = require("./routes/mealSelectionRoutes");
const profileMealSelection = require("./routes/profileMealSelctionRoutes");
const AllAttendance = require ('./routes/attendanceRoutes');
const UpdateWarden = require('./routes/updateWardenRoutes');
const app = express();
const cors = require('cors'); 
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Warden';
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');

    app.use('/getAttendance', attendanceRoute); 
    //add student
    app.use('/addStudents',addStudents);
    //add Warden
    app.use('/addWarden',addWardens);
    //update admin
    app.use('/updateAdmin',updateAdmin);
    //find Admin
    app.use('/findAdminById',findAdmin);
    //for login
    app.use('/login',Login);
    //find Resident
    app.use("/api/mealSelectionRoutes", mealSelectionRoutes);
    app.use("/api/profileMealSelection/mealSelection", profileMealSelection);
    app.use('/getAllStudents',findResident)
    // to get count
    app.use("/getAttendnace",AllAttendance)
    //to update Warden
    app.use("/updateWarden",UpdateWarden);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
