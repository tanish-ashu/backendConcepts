import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [notes, setNotes] = useState([
    {
      title: "test title",
      description: "test description"
    },
    {
      title: "test title",
      description: "test description"
    },
    {
      title: "test title",
      description: "test description"
    },
]);


  return (
    <>
    <div className='notes'>
      {
        notes.map(note =>{
        return <div 
          className='note'>
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
