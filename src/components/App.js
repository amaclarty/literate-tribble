import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import {useState, useEffect} from 'react'

function App() {

const [poems, setPoems] =useState([])
const [showPoems, setShowPoems] =useState(true)

useEffect(() => {
  const getPoems = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res = await req.json()
    setPoems(res)
  }
  getPoems()
}, [])

  const handleNewPoem = (newPoem) => {
    let updatedPoems = [...poems, newPoem]
    setPoems(updatedPoems)
  }


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={(e) => setShowPoems(!showPoems)}>Show/hide new poem form</button>
        {showPoems ? <NewPoemForm handleNewPoem={handleNewPoem} poems={poems}/> : null}
      </div>
      <PoemsContainer poems={poems} handleNewPoem={handleNewPoem}/>

    </div>
  );
}

export default App;
