import React, { useState, useEffect } from "react";
import "./ResProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";


function NavbarBG() {
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
      <img id="hosteliconpro" src="/FoodIcons/hostel .png" alt="HostelIcon" />
      <h1 id="prohr">HOSTEL RESIDENT</h1>
      <Link to="/resident_home" id="proh">
        Home
      </Link>
      <Link to="/foodqr" id="fqr">
        Food QR
      </Link>
      <Link to="/meal-selection" id="mealselection">
        Meal Selection
      </Link>
      <Link to="/" id="log" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

function ProfileHeading() {
  return <h1 id="ProfileGrad">Profile</h1>;
}

function ProfileBoxBG() {
  const [resident, setResident] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const residentId = localStorage.getItem("residentId");
    if(!residentId){
      window.location.href="/404";
    }
    const fetchResidentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profileMealSelection/resident/${residentId}`
        );
        setResident(response.data);
      } catch (error) {
        console.error("Error fetching resident data:", error);
        setError("Failed to load resident details.");
      } finally {
        setLoading(false);
      }
    };

    fetchResidentData();
  }, []);

  return (
    <div id="ProfileBoxBg">
      <div id="ProfilePhotoWrapper">
        <img
          id="ProfilePhoto"
          src="/FoodIcons/Profile.jpg"
          alt="Profile Photo"
        />
      </div>
      <div id="ProfileDetails">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : resident ? (
          <>
            <p id="ResidentName" >
              <strong>Name:</strong>{" "}
              <span style={{ fontWeight: "normal" }}>
                {resident.residentname}
              </span>
            </p>
            <p id="ResidentEmailID">
              <strong>Email ID:</strong>{" "}
              <span style={{ fontWeight: "normal" }}>{resident.username}</span>
            </p>
            <p id="ResidentID">
              <strong>Resident ID:</strong>{" "}
              <span style={{ fontWeight: "normal" }}>
                {resident.residentID}
              </span>
            </p>
            <p id="PhoneNo" style={{marginBottom:'5px'}}>
              <strong>Phone No:</strong>{" "}
              <span style={{ fontWeight: "normal" }}>{resident.phoneNo}</span>
            </p>
          </>
        ) : (
          <p>No resident details available.</p>
        )}
      </div>
    </div>
  );
}

function BookingsHeading() {
  return <h1 id="BookingsHeading">You're Bookings</h1>;
}

function WeekButtonsInProfile({ onSelectDay }) {
  return (
    <div id="BtnsBGProfileWrapper">
      <div id="BtnsBGProfile">
        <button id="monpro" onClick={() => onSelectDay("Monday")}>
          Monday
        </button>
        <button id="tuepro" onClick={() => onSelectDay("Tuesday")}>
          Tuesday
        </button>
        <button id="wedpro" onClick={() => onSelectDay("Wednesday")}>
          Wednesday
        </button>
        <button id="thurspro" onClick={() => onSelectDay("Thursday")}>
          Thursday
        </button>
        <button id="fripro" onClick={() => onSelectDay("Friday")}>
          Friday
        </button>
        <button id="satpro" onClick={() => onSelectDay("Saturday")}>
          Saturday
        </button>
        <button id="sunpro" onClick={() => onSelectDay("Sunday")}>
          Sunday
        </button>
      </div>
    </div>
  );
}

function BookingsDetailsInProfile({ selectedMeal }) {
  return (
    <div id="BookingDetailsBGWrapper">
      <div id="BookingDetailsBG">
        <div id="breakfastProfie">
          <p id="breakHead">Breakfast</p>
          <p id="breakfastDetails">
            {selectedMeal?.breakfastDish || "No selection"}
          </p>
        </div>
        <div id="lunchProfie">
          <p id="lunchHead">Lunch</p>
          <p id="lunchDetails">{selectedMeal?.lunchDish || "No selection"}</p>
        </div>
        <div id="DinnerProfile">
          <p id="dinnerHead">Dinner</p>
          <p id="dinnerDetails">{selectedMeal?.dinnerDish || "No selection"}</p>
        </div>
      </div>
    </div>
  );
}

function ResProfile() {
  const [meals, setMeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMealSelections = async () => {
      const residentId = localStorage.getItem("residentId");
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profileMealSelection/mealSelection/${residentId}`
        );
        if (Array.isArray(response.data)) {
          setMeals(response.data);
          console.log("Fetched Meals:", response.data); // Log the fetched meals
        } else {
          console.warn("Expected an array but received:", response.data);
          setMeals([]);
        }
      } catch (error) {
        console.error("Error fetching meal selections:", error);
        setMeals([]);
      }
    };

    fetchMealSelections();
  }, []);

  useEffect(() => {
    const mealForSelectedDay = meals.find(
      (meal) => meal.bookedDay === selectedDay
    );
    setSelectedMeal(mealForSelectedDay);
  }, [selectedDay, meals]);

  return (
    <div id="resprocontainer">
      <NavbarBG />
      <NavbarItems2 />
      <ProfileHeading />
      <ProfileBoxBG />
      <BookingsHeading />
      <WeekButtonsInProfile onSelectDay={setSelectedDay} />
      <BookingsDetailsInProfile selectedMeal={selectedMeal} />
    </div>
  );
}

export default ResProfile;