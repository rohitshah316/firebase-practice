import React, { useEffect, useState } from 'react'
import { auth } from './firebase/firebase';
import {onAuthStateChanged} from 'firebase/auth'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

const App = () => {

  const [user,setUser]=useState(null);
const [loading, setLoading] = useState(true);
  useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>unsubscribe();

  },[]);


  if (loading) return <h2>Loading...</h2>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App