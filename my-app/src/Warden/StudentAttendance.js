import React, { useEffect, useState } from 'react';
import attendanceimg from './attendance.png';
import foodimg from './food.jpg';
import { baseurl } from '../Admin/AdminDashboard';
import axios from 'axios';
import PieChart from './PieChart';

function StudentAttendance() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [count, setCount] = useState(0);

  const getAttndance = () => {
    axios.get(baseurl + `/getAttendnace`)
      .then((res) => {
        const attendance = res.data;
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const todayIndex = new Date().getDay();
        const nextDayIndex = (todayIndex + 1) % 7;
        const nextDay = daysOfWeek[nextDayIndex];
        const nextDayCount = attendance[0].counts[nextDay];
        setCount(nextDayCount);
      });
  }

  useEffect(() => {
    getAttndance();
    const data = new Date();
    const format = `${data.getDate() + 1}/${data.getMonth() + 1}/${data.getFullYear()}`;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day_format = daysOfWeek[(data.getDay() + 1) % 7];
    setDate(format);
    setDay(day_format);
  }, []);

  return (
    <div className='structure mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img
            src={foodimg}
            alt="Attendance logo"
            style={{ height: '90%', width: '80%', borderRadius: '30px' }}
          />
        </div>
        <div className='col-6'>
          <div className='attendance' style={{ marginLeft: '60px' }}>
            <h3>Date: {date}</h3>
            <h3>Day: {day}</h3>
            <h3>Attendance is {count === -999 ? 0 : count}</h3>
            <h6 style={{ color: 'red' }}>Note * This is tomorrow's attendnace</h6>
            <PieChart count={count} />
          </div>
        </div>
        <div className='foot'></div>
      </div>
    </div>
  );
}

export default StudentAttendance;
