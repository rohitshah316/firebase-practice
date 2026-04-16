import React from 'react'
import { auth } from '../firebase/firebase'
import {signOut} from 'firebase/auth'

const Dashboard = () => {

    const handleLogout=async()=>{
        await signOut(auth);
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard