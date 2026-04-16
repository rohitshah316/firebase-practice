import React, { useState } from 'react'
import { auth } from '../firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { NavLink } from 'react-router-dom';
const SignUp = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSignUp=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("User Created");
            console.log("user created");
        }catch(err){
            alert(err.message);
        }
    }

  return (
    <div>
        <h2>SignUp</h2>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSignUp}>SignUp</button>
        <br />
                <NavLink to='/login'>Already Created Account</NavLink>

    </div>
  )
}

export default SignUp