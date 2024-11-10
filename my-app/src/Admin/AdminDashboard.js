import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export const baseurl = 'http://localhost:5000';

export default function AdminDashboard() {
    const [adminData, setAdminData] = useState({});
    const adminEmail = localStorage.getItem('adminemail'); 
    const [residents, setResidents] = useState([]);     
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!adminEmail) {
            navigate('/404'); 
        } else {
            getAdmin();
            getStudents();
        }
    }, [adminEmail]); 

    const getStudents = () => {
        axios.get(`${baseurl}/getAllStudents`)
            .then((res) => {
                setResidents(res.data);
                console.log("Fetched");
            })
            .catch((err) => {
                console.log("Can't fetch");
            });
    };

    const getAdmin = () => {
        axios.get(`${baseurl}/findAdminById/${adminEmail}`)
            .then((res) => {
                setAdminData(res.data);
            })
            .catch((err) => {
                alert("Something went wrong");
                navigate("/404");
            });
    };

    const handleLogout = () => {
        setTimeout(() => {
            localStorage.clear(); 
            toast.success("Logged out successfully");
            navigate("/");
        }, 0); 
    };

    return (
        <div className='dashboard'>
            <div className='row'>
                <div className='col-md-8'>
                    <div style={{ marginTop: '10px', marginLeft: '15px' }}>
                        <h4>Admin Dashboard</h4>
                    </div>
                    <div className='box-container'>
                        <div className='box box-register'>
                            <div>
                                <p className='header-text'>Register new students</p>
                                <Link to="/admin/addStudent" className='link-text'>Add Student &nbsp; &gt;  </Link>
                            </div>
                        </div>
                        <div className='box box-warden'>
                            <div>
                                <p className='header-text'>Enroll New Warden</p>
                                <Link to="/admin/addWarden" className='link-text'>Add Warden &nbsp; &gt;  </Link>
                            </div>
                        </div>
                        <div className='box box-update'>
                            <div>
                                <p className='header-text'>Update your profile</p>
                                <Link to="/admin/updateProfile" className='link-text'>Update &nbsp; &gt; </Link>
                            </div>
                        </div>
                    </div>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Resident ID</th>
                                <th>Name</th>
                                <th>Contact Number</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {residents.length > 0 ? (
                                residents.map((resident) => (
                                    <tr key={resident.residentID}>
                                        <td>{resident.residentID}</td>
                                        <td>{resident.residentname}</td>
                                        <td>{resident.phoneNo}</td>
                                        <td>{resident.username}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No residents found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='col-md-4'>
                    <div className='profile-card'>
                        <h3 className='profile-title' style={{ marginTop: '20px' }}>Admin Profile</h3>
                        <div className='admin-data'>
                            <h5 className='h-text'>Name: {adminData.name}</h5>
                            <h5 className='h-text'>Email: {adminData.email}</h5>
                            <div style={{ marginTop: '30px' }}>
                                <Link onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
