import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { baseurl } from './AdminDashboard';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddWarden() {
    const [wName, setWname] = useState("");
    const [wEmail, setWemail] = useState("");
    const [wPassword, setWpassword] = useState("");
    const [wAddress, setWaddress] = useState("");
    const [wPhone, setWphone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data= {'name': wName,
            'email': wEmail, 
            'password':wPassword,
            'address': wAddress, 
            'phone':wPhone };
        axios.post(baseurl+`/addWarden`,data)
        .then((res)=>{
            toast.success('Registered Successfully');
            navigate('/admin');
        })
        .catch((err)=>{
            toast.error(err.response.data.message);
        })
    };

    return (
        <div className='background' style={{ fontFamily: 'Arial' }}>
            <div className='warden-card'>
                <h3 style={{ color: 'blue', fontSize: '25px', fontFamily: 'Arial' }}>Add Warden</h3>
                <form onSubmit={handleSubmit}>
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Name
                    </label>
                    <input type='text' className='form-control'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        onChange={(e) => { setWname(e.target.value); }}
                        placeholder='Enter Name ...' required />
                    
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Email
                    </label>
                    <input type='email' className='form-control'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        onChange={(e) => { setWemail(e.target.value); }}
                        placeholder='Enter Email ...' required />
                    
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Password
                    </label>
                    <input type='password' className='form-control'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        onChange={(e) => { setWpassword(e.target.value); }}
                        placeholder='Enter Password ...' required />
                    
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Contact Number
                    </label>
                    <input type='tel' className='form-control'
                        pattern='[6-9]{1}[0-9]{9}'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        onChange={(e) => { setWphone(e.target.value); }}
                        placeholder='Contact Number ...' required />
                    
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Address
                    </label>
                    <textarea className='form-control'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        onChange={(e) => { setWaddress(e.target.value); }}
                        placeholder='Enter Address ...' required />
                    
                    <label style={{ marginLeft: '20px', marginTop: '15px', fontSize: '15px', color: 'black' }}>
                        Kitchen Dept. ID
                    </label>
                    <input type='text' className='form-control'
                        style={{ width: '90%', marginLeft: '20px', marginTop: '8px' }}
                        value={wEmail} 
                        disabled 
                        placeholder='Kitchen Dept. ID' />
                    <button type='submit' className='btn btn-primary' style={{ marginTop: '40px', marginLeft: '20px', width: '90%', height: '40px' }}>Submit</button>
                </form>
            </div>
        </div>
    );
}
