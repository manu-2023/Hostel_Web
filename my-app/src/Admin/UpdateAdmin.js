import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { baseurl } from "./AdminDashboard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function UpdateAdmin() {
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const navigate = useNavigate();
    const adminEmail = localStorage.getItem('adminemail');
    const Change = (e) => {
        e.preventDefault();
        if (password === "" || cpassword === "") {
            toast.error("Please Fill the fields");
            return
        }
            if (password != "" && cpassword != "" && password === cpassword) {
                const data = { email: adminEmail, newPassword: password };
                axios.put(baseurl + `/updateAdmin`, data)
                    .then((res) => {
                        navigate("/admin");
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
    const ClickAdmin = (e)=>{
        e.preventDefault();
        navigate("/admin");

    }
    return (
        <div className="background">
            <div className="card" style={{marginLeft:'50px',marginTop:'150px',width:'33%',height:'45%',}}>
                <h3 style={{ marginLeft: "20px", marginTop: "20px" }}>Update Profile  <span style={{ color: 'red', fontSize: '13px' }}>&nbsp;Note only passowrd can change</span></h3>
                <form>
                    <input type="text" className="form-control"
                        style={{ width: '70%', margin: 'auto', marginTop: '25px' }}
                        placeholder="Enter your new password...."
                        onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" className="form-control"

                        style={{ width: '70%', margin: 'auto', marginTop: '25px' }}
                        placeholder="Confirm your Password...."
                        onChange={(e) => setCpassword(e.target.value)} requireds /><br></br>
                    <button className="btn btn-primary" style={{ height: '45px' ,marginLeft:'75px'}} onClick={Change}>Submit</button><br></br><br></br>
                    <Link style={{fontSize:'15px',marginLeft:'230px'}} onClick={ClickAdmin} >Back</Link>
                </form>

            </div>

        </div>

    )
}


