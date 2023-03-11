import React, {useState} from "react";

const MenuItems = (props) => {
  console.log(props);
//   console.log(props.name);
  return (
    <>
      <ul>
        <li>{props.menuItems.name}</li>
      </ul>
      {/* conditional rendering; if props.menuItems.ordered = true, then output ORDERED!*/}
      {props.menuItems.ordered && <h4>ORDERED!</h4>}
      {/* add anonymous function to stop the Immediately invoked function */}
      <button onClick={() => {props.orderMenuItem(props.index)}} className='orderButton'>Order</button>
    </>
  )
}

export default MenuItems