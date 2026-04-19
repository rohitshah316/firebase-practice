import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();

        try{
            await signInWithEmailAndPassword(auth,email,password);
            alert('Logged In');
           navigate('/dashboard')
        }catch(err){
            alert(err.message);
        }
    }
  return (
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
         <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>

        <button type='submit'>Login</button>

        <br />
        <NavLink to='/signup'>Create New Account</NavLink>
    </form>
  )
}

export default Login