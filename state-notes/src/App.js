import React, { useState } from 'react'
import Tracker from './components/Tracker';


// make component first (Tracker) then use the component call <Tracker/> so that Tracker is reusable for multiple months
const App = () => {
  return (
    <>
      <h2>Mile Tracker</h2>
      <h3>October</h3>
      <Tracker/>
      <h3>November</h3>
      <Tracker/>
      <h3>December</h3>
      <Tracker/>
    </>
  )
}

export default App;