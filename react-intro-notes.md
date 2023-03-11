# REACT INTRO NOTES

 - Building User Interfaces
 - UI : display and user interaction with application
 - JS library : collection of code snippets to be used in specific ways
 - Component-based : small pieces of code put together to build app
 - Invented by FaceBook
 - AirBnB, Netflix, Uber, Yahoo, Dropbox, NY Times, Facebook and many others -> all use React
 - Uses Yarn as package manager (or npm - node pkg manager)

# COMPONENT-BASED
 - build individual components
 - put them together to create app
 - extremely scalable
 - components are REUSABLE
 - UI focused

 - keep it scalable (dynamic)

- uses functions to create UI elements - calls on them again & again
- functions return object that holds JSX
    - JSX : JSX is JavaScript flavored markdown that behaves very similarly to HTML. There are a couple small difference between HTML and JSX. JSX uses the syntax className rather than HTML's class to modify the look and behavior of a JSX element. This is because class is already a protected word in JavaScript. JSX is a building block of React components and what allows React to create user interfaces.
    - the object holds data and behavior

# Functional Components
 - looks like JS function, but uses PascalCase for fxn name. **IMPORTANT**
 - returns JSX -> syntax extension of JS (basically HTML + JS)

    ex. const App = () => {
           return <h1>Hello World!</h1>
        }

# DOM
 - Document Object Model : visual representation of your code

 - **VIRTUAL DOM** - this is the key to REACT
    ex. when you click the heart on instagram, only the heart changes to a filled red heart instead of the whole page refreshing

# REACT COMPONENTS
 - fxn's purpose is to return a value (data)
 - in react - return value of JSX
 - to have the functional component run, we have to make a **COMPONENT CALL**
    - looks like HTML self-closing tag with PascalCase <App />
    - must be wrapped in JSX fragments <> </>

    - const App = () => {
        return(
            <>
            <h1>Hello World!</h1>
            <Hotel/>
            </>
        )
      }
      const Hotel = () => {
        return <h2>Happy Friday!</h2>
      }


Desktop -> $ yarn create react-app 'app name'