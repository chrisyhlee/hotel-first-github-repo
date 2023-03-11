# React Inputs and Events Hotel

- React : JS library to create UI

- Boiler plate for functional component
```javascript
// import other components or software needed for application
import React from 'react'

// declaring functional component
const App = () => {
    // data needed for the functional component ie. variables or functions
    // section that sends html in the format JSX
    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}

export default App
```

- Build a joke sharing app
    - Store data and functions in App.js
    - other components will be the display components
    - share data thru props

- DOM events : triggered by user interactions, such as typing, clicking a button, hovering over elements
- Event Listeners : listen out for the DOM events and trigger actions within our app

- Input tag with its attributes: type, value, and onChange will allow us to collect user inputs to perform actions

- Attributes
    - 'type' states what kind of information can be accepted
    - 'value' represents the state value of the variables used in the app
    - 'onChange' allows us to update the state