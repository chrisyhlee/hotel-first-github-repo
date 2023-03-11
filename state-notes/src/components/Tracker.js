import React, {useState} from 'react'

const Tracker = () => {

      const [miles, setMiles] = useState(0) 
    
      const addMile = () => {
        setMiles(miles + 1)
      }
    
      return (
      <>
        <p>Miles: {miles}</p>
        {/* to use style, need 2 sets of curly braces */}
        <button onClick={addMile} style={{backgroundColor: "turquoise", height:"25px"}}>Add a mile!</button>
      </>
      )
    }

export default Tracker;