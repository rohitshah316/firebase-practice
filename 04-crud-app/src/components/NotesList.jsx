import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';
import { collection,query,where,getDocs } from 'firebase/firestore';


const NotesList = ({user}) => {

    const [notes,setNotes]=useState([]);

    const fetchNotes=async()=>{
        if(!user?.uid) return;

        try{
            const q=query(
                collection(db,'notes'),
                where('uid','==',user.uid)
            );

            const querySnapshot=await getDocs(q);


            const data=querySnapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            setNotes(data)
        }catch(err){
            console.error(err.message);
        }
    }



    useEffect(()=>{
        fetchNotes();
    },[user])
  return (
    <div>
        <h3>NotesList</h3>
        <small>{notes.length} Notes</small>
        {notes.length===0?(<p>No Notes yet.</p>):(
            notes.map((note)=>(
                <div key={note.id}>
                    <p>{note.title}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default NotesList