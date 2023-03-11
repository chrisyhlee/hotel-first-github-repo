# React Props

# DOM
 - visual representation of the raw code (what you see on the actual web page)

# Virual DOM
 - isolates changes betwen DOM and code and updates it without changing anything else
 - don't have to do an entire page refresh
    ex. you 'like' something on facebook, just that 'like' is refreshed, not the whole page

- in index.html we see <div> tag with attribute of id="root"
- in index.js we see const root = ReactDOM.createRoot(document.getElementById('root'))

- <a></a> anchor tags : something you can click to navigate somewhere
- <div></div> div tag : container for markup

- - - - - - - - minimum requirements for app - - - - - - -

import React from "react";

const App = () => {
  return (
    <>
      <h1>Howdy!</h1>
    </>
  )
}

export default App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- App.js is the 'brains' of the operation

- Props : 'properties; JavaScript object used for communication between components, one directional flow of communication from a component to a nested component via the component call

- App.js : logic component
- EpisodeList.js : display component