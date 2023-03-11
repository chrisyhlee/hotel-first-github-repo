import './App.css';
import React, { useState } from 'react';
import ColorBox from './components/Box'
import AddBox from './components/ButtonToAdd'

const App = () => {
  const [addingBox, setAddingBox] = useState([])
  const addBox = () => {
    setAddingBox([...addingBox, ColorBox])
  }
  const rmBox = () => {
    setAddingBox(addingBox.splice(0, addingBox.length - 1))
  }
  return (
    <>
      <button onClick={addBox}>Add a Box</button>
      <button onClick={rmBox}>Remove a Box</button>
      {addingBox.map((item, i) => (<ColorBox key={i}/>))}
    </>
  )
}

export default App