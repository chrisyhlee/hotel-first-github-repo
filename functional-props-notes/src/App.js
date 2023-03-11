import './App.css';
import MenuItems from './components/MenuItems';
import React, {useState} from 'react';

const App = () => {

  // DRY : Don't Repeat Yourself
  const [menu, setMenu] = useState([
    {name: 'Lofthaus Sugar Cookies', ordered: false}, 
    {name: 'Prime Rib', ordered: false}, 
    {name: 'Eggnog', ordered: false}, 
    {name: 'Mac & Cheese', ordered: false}, 
    {name: 'Lumpia', ordered: false},
  ])

  // set selectedItem to represent the index of the clicked on food item
  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered = true;
    setMenu([...menu])
  }

  return ( 
    <>
      <h1 className='header'>Hotel Holiday Happening</h1>
      <h3 className='menuHead'>Menu</h3>
      {menu.map((item, index) => {
        return (
        <MenuItems 
          menuItems={item} 
          orderMenuItem={orderMenuItem}
          index={index}
          />)
      })}

    </>
  );
}

export default App;
