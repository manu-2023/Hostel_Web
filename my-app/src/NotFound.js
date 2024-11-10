import React from 'react'
import { useNavigate } from 'react-router-dom';



const NotFound = ()=>{
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate("/");
    }
    return(
        <>
            <center>
                <div style={{marginTop:'100px'}}>
                <h3 style={{color:'gray'}}>OOPs ! You Logged Out </h3>
                <h4 style={{color:'gray'}}>Please Login Again !!</h4>
                <button className='btn btn-danger'style={{width:'110px',height:'45px',marginLeft:'10px',marginTop:'20px'}} onClick={handleLogin}>LOGIN</button>
                </div>
            </center>
        </>
    )
}
export default NotFound;

