import React from "react";
import './App.css';
import { useState } from "react";
import axios from "axios";
import { baseurl } from "../Admin/AdminDashboard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProfile(){
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    const wardenEmail = localStorage.getItem('wardenemail');
    const navigate = useNavigate();

    const Change = (e) => {
        e.preventDefault();
        if (password === "" || cpassword === "") {
            toast.error("Please Fill the fields");
            return
        }
            if (password != "" && cpassword != "" && password === cpassword) {
                const data = { email: wardenEmail, newPassword: password };
                axios.put(baseurl + `/updateWarden`, data)
                    .then((res) => {
                        navigate("/warden");
                        toast.success(res.data.message);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                    })
            }
        
        else{
            toast.error("Password length should be greater than 8")
        }
    
    }
        return(
            <div className="back">
            <div className="card-update" style={{marginLeft:'38%'}}>
                <h3 style={{ marginLeft: "20px",paddingTop:'15px' }}>Update Profile  <span style={{ color: 'red', fontSize: '13px' }}>&nbsp;Note only passowrd can change</span></h3>
                <form>
                    <input type="text" className="form-control"
                        style={{ width: '70%', margin: 'auto', marginTop: '25px' }}
                        placeholder="Enter your new password...."
                        onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" className="form-control"

                        style={{ width: '70%', margin: 'auto', marginTop: '25px' }}
                        placeholder="Confirm your Password...."
                        onChange={(e) => setCpassword(e.target.value)} requireds /><br></br>
                    <button className="btn btn-primary" style={{ height: '42px',marginLeft:'65px' }} onClick={Change}>Submit</button>
                </form>

            </div>

        </div>
    )
}
export default UpdateProfile;


