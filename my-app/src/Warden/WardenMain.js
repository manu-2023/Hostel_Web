import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


function WardenMain() {
  const navigate = useNavigate();
  const wardenEmail = localStorage.getItem('wardenemail');

  useEffect(()=>{
    if(!wardenEmail){
      navigate("/404")
    }
  },[wardenEmail])


  const handlelogout= ()=>{
    localStorage.clear();
    toast.success("Logged Out succesfull...!")
    setTimeout(() => {

    navigate("/"); // Redirect after clearing session storage
  }, 0);
    navigate("/");
  }
  return (
    <>
    <div id="controller">
        <div className='navbar'>
            <h3 style={{ color: "white", fontSize: '30px',marginLeft:'50px' }} className="nav-heading">Welcome</h3>
            <div className="nav-links">
                <Link to="/warden" className="nav-link" element={<WardenMain />}/>
                <Link to="/warden/studentAttendance" className="nav-link">Attendance</Link>
                <Link to="/warden/mealsTable" className="nav-link">Meals Table</Link>
                <Link to="/warden/updateprofile" className="nav-link">Update Profile</Link>
                <Link className="nav-link" onClick={handlelogout}>Logout</Link>
            </div>
        </div>
    </div>


      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
      </>
  );
}

export default WardenMain;
