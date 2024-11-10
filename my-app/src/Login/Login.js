import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="loginPageContainer">
      <Heading />
      <LoginBox />
      <FoodPhotos />
    </div>
  );
}



function Heading() {
  return (
    <div id="heading">
      <p>
        Hostel
        <br />
      </p>
      <p id="foodManagement">Food Management System</p>
    </div>
  );
}


function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || userType == "") {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");
    const data = { email: username, password, usertype: userType };
    console.log(data);

    axios.post(`http://localhost:5000/login`, data)
      .then((res) => {
        const type = res.data.message; 
        const resData = res.data.data;
        console.log("data is ", resData);
        if (type === "Admin") {
          localStorage.setItem('adminemail', username);
          console.log("ADMINNNNNNNNNNNNNNN");
          navigate('/admin'); 
          toast.success("Logged in successfully");
        } 
        if (type === "Resident") {
          localStorage.setItem('residentname', resData.residentname);
          localStorage.setItem('residentId', resData.residentID);            
          navigate('/resident_home'); 
          toast.success("Logged in successfully");
        }
        if (type === "Warden") {
          localStorage.setItem('wardenemail', username);
          console.log("Studenttttt");
          navigate('/warden'); 
          toast.success("Logged in successfully");
        }
        if (type === "kitchen") {
          localStorage.setItem('kitchdeptemail', username);
          console.log("Kitchen");
          navigate('/kitchenDept'); 
          toast.success("Logged in successfully");
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Login failed");
      });
  }

  return (
    <div id="loginContainer">
      <div id="welcome">
        <p id="Welcome_Back">Welcome Back</p>
        <p id="Enter_name">
          Enter your username and password to access your account
        </p>
      </div>
      <form id="loginDetails" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="email"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="userType">User Type:</label>
        <select
          id="userType"
          value={userType}
          className="form-select"
          onChange={(e) => setUserType(e.target.value)}
          required
          style={{ width: '95%' }}
        > 
          <option hidden>Select User Type</option>
          <option value="admin">Admin</option>
          <option value="warden">Warden</option>
          <option value="resident">Hostel Resident</option>
          <option value="kitchen">Kitchen Department</option>
        </select>
        <br />
        {errorMessage && <p style={{ color: "red", fontSize: '15px', marginTop: '0px' }}>{errorMessage}</p>}
        <button type="submit" id="loginpage_btn" >
          Submit
        </button>
      </form>
     <div style={{marginTop:'50px'}}>
     <Link style={{color:'black',marginRight:'10px',fontFamily:'10px'}} to="/about">About us</Link>

     </div>
     </div>

  );
}

function FoodPhotos() {
  return (
    <div id="login_page_Photos_Container">
      <div id="buildings">
        <div id="building"></div>
        <div id="Old_built"></div>
      </div>
      <div id="Food"></div>
    </div>
  );
}

export default LoginPage;
