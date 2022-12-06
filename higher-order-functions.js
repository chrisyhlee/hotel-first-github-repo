// HIGHER ORDER FUNCTIONS

// ARRAY methods
// - .forEach()
// - .map()
// - .filter()

// const showArray = ["Wednesday", "Survivor", "Wheel of Fortune", "This Old House", "Severance", "Westworld"]

const numsArray = [5, 8, 15, 36, 42]

// ------- .forEach() --------
// - will execute something once per item in the array
// - takes anonymous function as an argument
// - cannot set a start/stop as you can in a for loop

// showArray.forEach(() => {
//     console.log("Hey Hotel!!")
// })
// output -> "Hey Hotel!!" x6

// Anonymous fxn also takes an argument - required parameter is "value" (can be named anything)
    // value is the value of he element at the current index in iteration process

// showArray.forEach((value) => {
//     console.log(`You like the show ${value}`)
// })
// output -> You like the show Wednesday. You like the show Survivor etc.

// - index - gives us access to the integer that represents the value's index

// showArray.forEach((value, index) => {
//     console.log(`You like the show ${value}. It's at position ${index}`)
// })
// output -> You like the show Wednesday. It's at position 0. etc.

// - array - this array you're calling the HOF on (in this case, showArray)

// showArray.forEach((value, index, array) => {
//     console.log(`You like the show ${value}, it's at space ${index}, in the array ${array}`)
// })
// can put any words in place of "value, index, array".
// can also put _ in place of placeholders you don't want to return (ex. puppy, _, kitty)

// .forEach() does not return anything; must console.log(). if you add a return, you will get undefined.

// -------------------------------------------------------

// MAP
//   - similar to forEach, more useful
//   - transforming or displaying each value in array
//   - returns a NEW ARRAY of the same length (leaves original array unchanged)
//   - must assign our map to a new variable

// const threesArray = [3, 6, 9, 12, 15]

// const multiplyBy = threesArray.map((value) => {
//     return value * 2
// })
// console.log(multiplyBy);
// output -> [ 6, 12, 18, 24, 30 ]

// Making it DYNAMIC

// const dynamicFunction = (arrayOfNumbers) => {
//     return arrayOfNumbers.map((value) => {
//         if(value % 2 === 0){
//             return value * 2
//         } else {
//             return "nope"
//         }
//     })
// }
// console.log(dynamicFunction(threesArray))
// output -> [ 'nope', 12, 'nope', 24, 'nope' ]

// when only using 1 line of code, don't need curly brackets or return
// const multiplyBy2 = threesArray.map((value) => {
    // return value * 2
// })
// const multiplyBy2 = threesArray.map(value => value * 2)

// Think about instagram: every photo is displayed in the same format (pic, comments, likes, etc). That is basically just taking a giant pool of info and mapping over it to display in the same way.

// ------------------------------------------------------------

// FILTER

// - .filter() - filters an array based on some condition we give it
// - returns a new array with filters applied
// - built-in "if" statement (conditional)
// - TRUTHY AND FALSY (in syllabus 12/5)

const showArray = ["Wednesday", "Survivor", "Wheel of Fortune", "This Old House", "Severance", "Westworld"]

// const searchW = showArray.filter((showwithWs) => {
//     return showwithWs.toUpperCase().includes('W' || 'w')
// })
const searchW = showArray.filter(showwithWs => showwithWs.toUpperCase().includes('W' || 'w'))

console.log(searchW)

const mixedDataArray = [3, 'hi', true, 50, 4, null, 'Hotel', 42, false, 'yo', 15]

// create a fxn named onlyOdds
// parameter is an array - mixed data types
// use filter to iterate
// inside the fxn we'll create a new variable oneType - placeholder of the filter by data type number
// filter over oneType to get the odds
// return the final variable

const onlyOdds = mixedDataArray.filter(value => typeof value === 'number')
const oneType = onlyOdds.filter(value => value % 2 !== 0)
console.log(oneType)