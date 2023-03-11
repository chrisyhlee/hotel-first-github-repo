import { useState } from 'react';
import './App.css';
import GoodBot from './components/GoodBot';
import BadBot from './components/BadBot';
import GoofBot from './components/GoofBot';
import NotGoofBot from './components/NotGoofBot';

const App = () => {

  const [name, setName] = useState()

  const typeTracker = (e) => {
    setName(e.target.value)
    // console.log(e.target.value);
  }
console.log(name);
  return (
    <>
      <h1 className='header'>Listening Bot</h1>
      <h3>Type something</h3>
      <input
      type='text'
      onChange={typeTracker}
      value={name}
      >

      </input>
      <div className='boxForBots'>
        <h2>Good Bot</h2>
        <GoodBot name={name}/>
        <h2>Bad Bot</h2>
        <BadBot name={name}/>
        <h2>Goof Bot</h2>
        <GoofBot name={name}/>
        <h2>Not Goof Bot</h2>
        <NotGoofBot name={name}/>
      </div>
    </>
  );
}

export default App;
