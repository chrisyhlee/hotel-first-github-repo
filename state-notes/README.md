# REACT STATE

<!--    state: a variable that holds the component's current state of things. -->

## Two types of components
1. Logic: component holding data in a state variable
2. Display: doesn't hold state - really just there to display

## useState()
 - react Hook : add state to functional components
 - returns a pair of values:
    - current state
    - method that updates state
 - useState(initialState) : pass the initial state

-------------------------------------------------------------

import React, { useState } from 'react'

const App = () => {
  // react state (look in README for notes)
  // declare a new state variable(miles) and a method that will update ("set" + variable name)

  const [miles, setMiles] = useState(0) 

  const addMile = () => {
    setMiles(miles + 1)
  }

  return (
    // put variable (miles) in curly braces to call JavaScript while in JSX
  <>
    <h2>Mile Tracker</h2>
    {/* wrap variable in curly braces to indicate that we are passing JS code */}
    <p>Miles: {miles}</p>
    <button onClick={addMile}>Add a mile!</button>
  </>
  )
}

// we want the button to add a mile every time it is clicked
 // - button needs a behavior/action
 // - need to create function
 // - use onclick attribute on button tag

export default App;

------------------------------------------------------------