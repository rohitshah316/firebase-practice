import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import {doc,deleteDoc,updateDoc,collection,query,where,onSnapshot} from 'firebase/firestore'
const NotesList = ({user}) => {

    const [notes,setNotes]=useState([]);




    const handleDelete=async(id)=>{
        try{
            await deleteDoc(doc(db,'notes',id));
        }catch(err){
            console.error(err.message);
        }
    }


    const handleUpdate=async(id,newTitle)=>{
        try{
            const noteRef=doc(db,'notes',id);
            await updateDoc(noteRef,{
                title:newTitle
            })
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(()=>{

        if(!user?.uid) return;

        const q=query(
            collection(db,'notes'),
            where('uid','==',user.uid)
        );

        const unsubscribe=onSnapshot(q,(snapshot)=>{
            const data=snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))
            setNotes(data);
        })

        return ()=>unsubscribe();
    },[user])
  return (
    <div>
        <h3>Notes:</h3>

        <small>{notes.length}</small>

        {notes.length===0?(<p>No Notes Yet.</p>):(
            notes.map((note)=>(
                <div key={note.id}>
                    <span>{note.title} </span>
                    <button onClick={()=>{
                        const newTitle=prompt("Enter new Title:");
                        if(newTitle && newTitle.trim()){
                            handleUpdate(note.id,newTitle.trim())
                        }
                    }}>Edit</button>
                    <button onClick={()=>handleDelete(note.id)}>Delete</button>
                </div>
            ))
        )}
    </div>
  )
}

export default NotesList