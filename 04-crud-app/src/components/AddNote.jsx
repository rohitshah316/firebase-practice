import React, { useState } from 'react'
import {db} from '../firebase/firebase'
import { collection,addDoc } from 'firebase/firestore';

const AddNote = ({user}) => {

    const [title,setTitle]=useState("");

    const handleAdd=async(e)=>{
        e.preventDefault();
        if(!title.trim()) return;

        if(!user || !user.uid){
            console.error("User not ready");
            return;
        }

        try{
            await addDoc(collection(db,'notes'),{
                title:title,
                uid:user.uid,
                createdAt: new Date()
            });

            setTitle("");
        }catch(err){
            console.error(err.message);
        }
    }
  return (
    <form onSubmit={handleAdd}>
        <input type="text" placeholder='Enter Note...' value={title} onChange={(e)=>setTitle(e.target.value)} />

        <button type="submit">Add</button>
    </form>
  )
}

export default AddNote