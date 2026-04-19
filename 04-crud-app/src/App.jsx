import React, { useEffect, useState } from 'react'
import { auth, db } from './firebase/firebase'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { onAuthStateChanged } from 'firebase/auth'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
const App = () => {

  const [user,setUser]=useState(null);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })
    return ()=>unsubscribe()
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <Dashboard user={user}/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App