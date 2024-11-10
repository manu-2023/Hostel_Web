import './App.css';
import UpdateProfile from './UpdateProfile';
import { Link } from 'react-router-dom';
import MealSelection from './MealSelection';
function WardenMain() {
  return (
    <div>
      <div id="controller">
        <div className='navbar'>
          <h3 style={{ color: "white" }} className="nav-heading">WELCOME &nbsp; WARDEN</h3>
          <div className="nav-links">
            <Link to="/" style={{ color: 'white' }} element={<WardenMain />}></Link>
            <Link to="/studentAttendance" style={{ color: 'white' }}>Attendance</Link>
            <Link to="/mealSelection" style={{ color: 'white' }}>Meal Selection</Link>
            <Link to="/updateprofile" style={{ color: 'white' }}>Profile update</Link>
            <Link  style={{color:'white'}}>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WardenMain;
