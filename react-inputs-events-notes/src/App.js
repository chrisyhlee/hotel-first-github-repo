import { useState } from 'react';
import './App.css';
import Jokes from './components/Jokes'

const App = () => {

  const jokesArray = [
    "question: Who is the snowman's favorite rapper? answer: Ice Cube.", "question: What do you get when you cross a snowman with a vampire? answer: Frostbite.", "question: What do you call an elf that runs away from Santa's workshop? answer: A rebel without a Claus!", "question: Why did the programmer quit his job? answer: Because he did't get arrays.", "question: What nationality is Santa Claus? answer: North Polish.", "question: How do you wash your hands over the holiday? answer: With Santatizer."
  ]

const [jolly, setJolly] = useState("")
const [jollyAnswer, setJollyAnswer] = useState("")
const [name, setName] = useState("")

const differentJoke = () => {
  const randomJoke = Math.floor(Math.random() * jokesArray.length)
  setJolly(jokesArray[randomJoke])
  setJollyAnswer(jokesArray[randomJoke])
}
console.log('jolly: ', jolly);

const handleChange = (events) => {
  setName(events.target.value);
}

  return (
    <>
    <h1>Let's deck the halls with laughter!</h1>
    <h3>Type your name here!</h3>
    <input 
      type="text" 
      onChange={handleChange}
      value={name}
    />
    {/* <button>Give me a joke!</button> */}
    <Jokes name={name} jolly={jolly} differentJoke={differentJoke} jollyAnswer={jollyAnswer}/>
    </>
  );
}

export default App;
