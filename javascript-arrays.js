// JavaScript Arrays

// What is a data type?
//      - Predefined classification of information, building block of a programming language

// let myArray = [3, 4, 5, 6, 7, "hello"]
// console.log(myArray.length)

// console.log(myArray[5])

let iceCreamFlavors = ['mint', 'cookie', 'rocky', 'coffee']
// console.log(iceCreamFlavors)
iceCreamFlavors.push("strawberry")
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.pop())
// console.log(iceCreamFlavors)
// console.log(iceCreamFlavors.push("strawberry"))
// console.log(iceCreamFlavors)
// iceCreamFlavors.sort()
// console.log(iceCreamFlavors)

let indexOfCookie = iceCreamFlavors.indexOf("cookie")
console.log(indexOfCookie)

var numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18]
// numbers.splice(2,2)
// console.log(numbers)
// output -> [2, 4, 10, 12, 14, 16, 18]

numbers.splice(0,0,0)
console.log(numbers)
// output -> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

