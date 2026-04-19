import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import AddNote from '../components/AddNote'
const Dashboard = ({user}) => {


    const handleLogout=async()=>{
        await signOut(auth);
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <p>Welcome {user.email}</p>
        <button onClick={handleLogout}>LogOut</button>

        <hr />
        <AddNote user={user}/>
    </div>
  )
}

export default Dashboard