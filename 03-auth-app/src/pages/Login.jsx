import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();


    const handleLogin=async()=>{
        try{
            await signInWithEmailAndPassword(auth,email,password);
            alert("Logged In");

            navigate("/dashboard");
        }catch(err){
            alert(err.message);
        }

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
<br />
        <NavLink to='/signup'>Create New Account</NavLink>
    </div>
  )
}

export default Login