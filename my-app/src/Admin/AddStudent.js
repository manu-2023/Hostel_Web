import React, { useState } from 'react';
import student from '../images/student.jpg';
import axios from 'axios';
import { baseurl } from './AdminDashboard';
import { toast } from 'react-toastify';
import { json, useNavigate } from 'react-router-dom';


export default function AddStudent() {
    const [stuName, setStuName] = useState("");
    const [stuEmail, setStuEmail] = useState("");
    const [stuPassword, setStuPassword] = useState("");
    const [stuPhone, setStuPhone] = useState("");
    const [stuAddress, setStuAddress] = useState("");
    const navigate = useNavigate();

    const Submission = (e) => {
        e.preventDefault();
        const data={
            'residentname':stuName,
            'username':stuEmail,
            'password':stuPassword,
            'phoneNo':stuPhone,
            'address':stuAddress,
        }
        console.log(JSON.stringify(data));
        axios.post(baseurl+`/addStudents`,data)
        .then((res)=>{
            toast.success("Registered Succesfully");
            navigate("/admin");
        })
        .catch((err)=>{
            toast.error(err.response.data.message);
       })
    }




    return (
        <div className='background' style={{ fontFamily: 'Arial' }}>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={student} alt="student registration image"
                        className='imgs'
                        style={{ width: '100%', marginRight: '900px', height: '85%' }} />
                </div>
                <div className='col-md-5'>
                    <div className='card-stu' style={{ position: 'absolute' }}>
                        <h3 style={{ marginTop: '20px', marginLeft: '15px',color:'blue' }}>Add Residential</h3>
                        <form onSubmit={Submission}>
                            <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Name
                            </label>
                            <input type='text' className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                onChange={(e) => { setStuName(e.target.value) }}
                                placeholder='Enter Name ...' required />

                            <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Email - ID
                            </label>
                            <input type='email' className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                onChange={(e) => { setStuEmail(e.target.value) }}
                                placeholder='Enter Email ...' required />

                            <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Password
                            </label>
                            <input type='password' className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                onChange={(e) => { setStuPassword(e.target.value) }}
                                placeholder='Enter Password ...' required />

                            <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Contact Number
                            </label>
                            <input type='phone' className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                onChange={(e) => { setStuPhone(e.target.value) }}
                                pattern='[6-9]{1}[0-9]{9}'
                                placeholder='Enter Contact Number ...' required />

                            <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Address
                            </label>
                            <textarea className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                onChange={(e) => { setStuAddress(e.target.value) }}
                                placeholder='Enter Address  ...' required />
                                <label style={{ marginLeft: '30px', marginTop: '15px', fontSize: '15px' }}>
                                Resident - ID
                            </label>
                            <input type='text' className='form-control'
                                style={{ width: '90%', margin: 'auto', marginTop: '5px' }}
                                disabled
                                placeholder='Automatically Generates ...' required />
                            <button className='btn btn-primary'
                                type='submit'
                                style={{ marginTop: '30px', marginLeft: '30px', width: '90%', height: '40px' }}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
