// src/components/Fauth.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BarGraph from './BarGraph';
import axios from 'axios';
import { baseurl } from '../Admin/AdminDashboard';
import { toast } from 'react-toastify';
import './f.css';

function Fauth() {
  const [countData, setCountData] = useState([]);  // Stores 7-day counts for the bar graph
  const [tomorrowCount, setTomorrowCount] = useState(0); // Stores tomorrow's count
  const kitchenDept = localStorage.getItem('kitchdeptemail');
  const navigate = useNavigate();

  useEffect(() => {
    if (!kitchenDept) {
      navigate("/404"); // Redirect to 404 if kitchenDept is not found in local storage
    } else {
      getAttendance();
    }
  }, [kitchenDept, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('kitchdeptemail');
    toast.success("Logged Out Successfully...!");

    setTimeout(() => {
      navigate("/"); // Redirect after a short delay
    }, 0); // Adjust the delay to match toast display duration
  };

  const getAttendance = () => {
    axios.get(baseurl + `/getAttendance`)
      .then((res) => {
        const attendance = res.data[0].counts;  // Extracts the 'counts' object directly
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Calculate indexes for today and tomorrow
        const todayIndex = new Date().getDay();
        const tomorrowIndex = (todayIndex + 1) % 7;
        
        // Get tomorrow's day name and corresponding count
        const tomorrowDay = daysOfWeek[tomorrowIndex];
        setTomorrowCount(attendance[tomorrowDay]);

        // Create an ordered array of counts for each day from Monday to Sunday
        const weeklyCounts = [
          attendance.Monday,
          attendance.Tuesday,
          attendance.Wednesday,
          attendance.Thursday,
          attendance.Friday,
          attendance.Saturday,
          attendance.Sunday,
        ];
        setCountData(weeklyCounts);
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
      });
  };

  return (
    <div className='graphBG'>
      <h4 style={{ marginLeft: '20px', marginTop: "15px" }}>Welcome Kitchen Department.</h4>
      <Link style={{ marginLeft: '20px' }} onClick={handleLogout}>Logout</Link>

      <div style={{ width: '80%', margin: '0 auto', marginTop: '100px' }}>
        <center>
          <h3 style={{ marginBottom: '30px' }}>Tomorrow's attendance: {tomorrowCount}</h3>
        </center>
        <BarGraph data={countData} /> 
      </div>

      <div className='foot'>
        <p>Welcome to our hostel management website, designed to make managing hostels easier and more efficient.</p>
      </div>
    </div>
  );
}

export default Fauth;
