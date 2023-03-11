// JavaScript Objects

// Data types
    // - primitive and non-primitive
    // - collection of primitive
    // - primitive: String, undefined, number, null, Boolean, symbol
    // - non-primitive: object (collections: arrays, objects)

// console.log(typeof 7)
    // output -> number
// console.log(typeof [3, 4, 5])
    // output -> object

// h1 {
//     color: "blue"
// }

// Objects : curly braces, key value pairs in side of curly braces are the base structure for an object
    // {myKey: "hello hotel"} base structure for object 
// symbol - unique identifier (key in an object)
    // myKey = symbol

// {key1: "value1", key2: "value 2", key3: "value3"} ---> valid object
    // as many key value pairs as needed; comma separated; inside curly braces

let myObject = {
    // key1, key2, kittycat are all 'symbols'
    key1: "value1", 
    key2: "value 2", 
    kittycat: "value3"
}
// console.log(myObject)
    // output -> {key1: "value1", key2: "value 2", key3: "value3"}
// console.log(myObject.kittycat)
    // output -> value3

let breakfast = {
    item1: "bacon", 
    item2: "chorizo", 
    item3: "eggs", 
    item4: "cereal", 
    // can put an object within a symbol in an object
    // e.x. i want item5 to contain beverages
    item5: {
        beverage1: "protein shake", 
        beverage2: "coffee", 
        beverage3: {
            juice1: "pomegranate", 
            juice2: "cranberry", 
            juice3: "oj"
        }
    }
}
// nested object ^^
// console.log(breakfast.item5.beverage2);
    // output -> coffee

// destructuring : gives JS a known pathway into an object

let {juice1, juice2, juice3} = breakfast.item5.beverage3
// let {juice2} = breakfast.item5.beverage3
// let {juice3} = breakfast.item5.beverage3
console.log(juice2)
    // output -> cranberry

// ------------- Methods ---------------
// What are methods?
    // built in methods, executing functionality
// What is a fxn?
    // snippet of code functionality; gives control over code

// Difference between fxn and method?
    // Both methods and fxns execute code functionality (execute behavior)
    // A method is a fxn that belongs to a data type or object.

// object with static data (types) and behavior
let mathProblem = {
    num1: 4,
    num2: 7,
    num3: 9,
    // method: addUp is a custom method that belongs to the mathProblem object
    addUp: function(){
        // if you are already in an object and want to reference something inside the object, use 'this'
        return this.num1 + this.num2 + this.num3
    }
}
// console.log(mathProblem.addUp())
// --> 20

// adding properties to object