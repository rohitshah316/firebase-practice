import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
const Dashboard = ({user}) => {


    const handleLogout=async()=>{
        await signOut(auth);
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <p>Welcome {user.email}</p>
        <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Dashboard