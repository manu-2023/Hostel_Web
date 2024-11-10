import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WardenMain from './WardenMain';
import UpdateProfile from './UpdateProfile';
import MealSelection from './MealSelection';
import StudentAttendance from './StudentAttendance';

function Routerpage() {
  return (
    <Router>
      <WardenMain/>
      <Routes>
        <Route path="/" element={<WardenMain />}/>
        <Route index path="/studentAttendance" element={<StudentAttendance/>}/>
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/mealSelection" element={<MealSelection/>}/>
      </Routes>
    </Router>
  );
}

export default Routerpage;
