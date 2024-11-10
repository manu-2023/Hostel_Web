import React, { useState, useRef, useEffect } from "react";
import "./FoodQR.css";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";

function NavbarBG() {
  useEffect(() => {
    const residentId = localStorage.getItem("residentId");
    if(!residentId){
      window.location.href="/404";
    }
})
  return <div id="navbarbg"></div>;
}

function NavbarItems2() {
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("residentname");
    localStorage.removeItem("residentId");
    window.location.href = "/";
  };
  return (
    <div id="NI2">
      <img id="hosteliconqr" src="/FoodIcons/hostel .png" alt="HostelIcon" />
      <h1 id="fqrhr">HOSTEL RESIDENT</h1>
      <Link to="/resident_home" id="fqrh">
        Home
      </Link>
      <Link to="/meal-selection" id="fqrmealselect">
        Meal Selection
      </Link>
      {/* <a href="#" id="com">
        Complaints
      </a> */}
      <Link to="/residentprofile" id="pro">
        Profile
      </Link>
      <Link to="/" id="log" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

function FoodQRHeading() {
  return (
    <div>
      <img src="/FoodIcons/qrcode.png" id="qrcodeicon" alt="Logo" />,
      <h1 id="FoodQRGrad">Food QR</h1>
    </div>
  );
}

function WeekButtonsQR({ setDay }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div id="weekbtns">
      {days.map((day) => (
        <button
          key={day}
          id={day.toLowerCase().slice(0, 3)}
          onClick={() => setDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

function QRDownload({ qrContent }) {
  const qrRef = useRef();

  const downloadQR = () => {
    const qrCanvas = qrRef.current.querySelector("canvas");
    const qrURL = qrCanvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = qrURL;
    downloadLink.download = "QR_Code.png";
    downloadLink.click();
  };

  return (
    <div id="QRDownBG">
      <div id="ActualQR" ref={qrRef}>
        {qrContent ? (
          <QRCodeCanvas value={qrContent} size={300} />
        ) : (
          <p>No meal selected yet</p>
        )}
      </div>
      {qrContent && (
        <button id="QRDownbtn" onClick={downloadQR}>
          Download
        </button>
      )}
    </div>
  );
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function FoodQR() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [qrContent, setQrContent] = useState(null);
  const residentId = localStorage.getItem("residentId");
  const residentName = localStorage.getItem("residentname");

  useEffect(() => {
    // Fetch meal booking status for the selected day
    const mealSelectionsKey = `mealSelections_${residentId}`;
    const mealSelections =
      JSON.parse(localStorage.getItem(mealSelectionsKey)) || {};
    const selectedMeal = mealSelections[selectedDay];

    if (selectedMeal && selectedMeal.selection === "Yes I will Eat") {
      const today = new Date().toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
      const bookingWeek = `2024-W${getWeekNumber(new Date())}`;
      const uniqueID = uuidv4(); // Generate a unique ID

      //residentId_residentName_BookingWeek_Selection_UniqueID
      const qrData = `Resident ID: ${residentId}   -|-   Resident Name: ${residentName}   -|-    Booking Week: ${bookingWeek}   -|-   Selection: ${selectedMeal.selection}   -|-   Unique ID: ${uniqueID}`;
      setQrContent(qrData);
    } else {
      setQrContent(null); // No QR if the meal isn’t booked
    }
  }, [selectedDay, residentId, residentName]);

  return (
    <div id="foodQRContainer">
      <NavbarBG />
      <NavbarItems2 />
      <FoodQRHeading />
      <WeekButtonsQR setDay={setSelectedDay} />
      <QRDownload qrContent={qrContent} />
    </div>
  );
}

export default FoodQR;