import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:3000/api/notes')
    .then((res) =>{
      setNotes(res.data.notes || [])
    })
    .catch(error =>{
     console.error("Fetch note error:", error)
    });
  }, []);

  return (
    <>
    <div className='notes'>
      {
        notes.map( (note,idx) =>{
        return <div 
          className='note' key={idx}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>  
        })
      }
      
    </div>
    
    </>
  )
}

export default App
