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
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>unsubscribe()
  },[])


  if(loading) return <p>Loading...</p>
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to='/login'/>}/>
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