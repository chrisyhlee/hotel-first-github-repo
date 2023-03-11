import './App.css';
import React, {useState} from 'react';
import Box from './components/Box';
import dice1 from './dice1.png'

const App = () => {

  const diceRolls = [1, 2, 3, 4, 5, 6]

  const [currentRoll, setCurrentRoll] = useState()
  const [rollLog, setRollLog] = useState([])
  
  let nextRoll = diceRolls[Math.floor(Math.random() * diceRolls.length)]
  const randomDice = () => {
    setCurrentRoll(nextRoll)
    setRollLog([...rollLog, " ", nextRoll])
  }
  const clearLog = () => {
    setRollLog([])
  }
  
  // const [dicePicture, setDicePicture] = useState()

  // if (currentRoll === 1){
  //   setDicePicture(<img src={dice1}/>)
  // }
  // const dicePicture = () => {
  //   if (currentRoll === 1) {
  //     document.getElementById("img").src = "http://www.speedymath.com/images/dice/1-border.gif"
  //   }
  // }

  // let rollStorage = []
  // console.log(rollStorage)
  // let rollHistory = rollStorage.push(nextRoll)
  // console.log(rollStorage);

  return (
    <>
      {/* <div className='background'></div> */}
      <h3>Click the box to roll the die</h3>
        <button onClick={randomDice} 
        style={{
          margin: 30, 
          height:"150px", 
          width:"150px", 
          backgroundColor:"white"
        }}> {currentRoll} </button>
        <div className="Dice1">
        <img src={dice1} className="dice1" />
        </div>
      <h3>Roll History</h3>
        <Box rollDisplay={rollLog}/>
        <button onClick={clearLog}>Clear</button>
    </>
  )
}

export default App;