# Data Types
```javascript
let exampleString = 'this is a string'
let exampleNum = 10
let exampleBoolean = true
let exampleUndefined = undefined
let exampleNull = null
// all of these are known as 'data types'
```

# Variables
```javascript
const age = 30
var name = 'Chris'
// var, let, const are all examples of keywords.
// keywords are reserved words that are built-in parts of the syntax.
let info = {
  key: 'value',
  address: 'Route 17',
  cohort: 'Hotel',
  age: age
}
// within the `info` object, `key`, `address`, `cohort`, `age` are all 'keys', while their values are 'value'. This relationship is known as a key value pair.
  // ex: the key of age has the value of 30
let arr = ['hello', 10, null, undefined]
// arrays (and also strings) have each element within them assigned an index, starting at 0.
// arr[0] = 'hello'
// arr[3] = undefined
```

# Functions
```javascript
const onlyOdds = (array) => {
  return array.filter(num => num % 2 !== 0)
}

// declaring function onlyOdds with const onlyOdds
// the `array` on line18 is considered a parameter.
  // parameters: placeholders for when the function is actually called.

let numArr = [1,2,3,4,5,6,7,8,9]
onlyOdds(numArr)
// line27 is the function call; when you actually use the function to run its contained logic
// numArr inside the function call is known as the argument
  // the arguments go wherever the parameters are when the function is called.
```

# Operators
Comparison operators:
==, ===, !=, !==, >, <, <=, >=, ? ternary operator

Logical operators:
&&, ||, !

# Conditionals
```javascript
if(true) {
  return true
} else {
  return false
}
// inside `if` or `else if` parentheses is your `condition`
```

# for loop
```javascript
for(let i=0; i<10; i++){

}
// standard for loop
// i is another example of a parameter for the current index in the iteration
// `for` keyword creates conditional loop
```

# Methods
```javascript
var numArr = [2,5,1,3,4]
// built-in method .sort can be used on arrays, so `.sort` is known as an array method
numArr.sort((a,b) => a-b)
// => [1,2,3,4,5]
numArr.find(num => num === 5)

// there are many built in methods and data type specific built in methods in javascript
// they are essentially just pre-built functions that can be called on to perform whatever functionality they provide

numArr.map(num => num * 3)
// higher order functions such as `.map` are also examples of built-in methods
```