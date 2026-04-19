import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { NavLink,useNavigate } from 'react-router-dom'
const Signup = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSignup=async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("User created");
            navigate('/login');
        }catch(err){
            alert(err.message);
        }
    }
  return (
    <form onSubmit={handleSignup}>

        <h2>Sign Up</h2>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>

        <button type='submit'>Sign Up</button>

        <br />
        <NavLink to='/login'>Already Have An Account</NavLink>
    </form>
  )
}

export default Signup