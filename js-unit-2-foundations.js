// PROMPT
// It's Christmas. Give each instructor a gift. Create a function that returns an array with a gift next to each value.
let instructionTeam = ["Sarah", "Austin", "Trish", "Elyse", "Charlean", "Nicole"]

// PESUDOCODE
// declare function named hotelGoodies. use for loop to add gift via iteration to each value of the inputted array.
// input: array of strings
// expected output: new array with a gift 🎁 next to each value

// Function
const hotelGoodies = (array) => {
    // create an empty array to store the values
    let arrayTwo = []
    for(let i=0; i < array.length; i++){
        // use push() to add each value to the array
        arrayTwo.push(array[i] + " 🎁")
    }
    // return outside of for loop to let the for loop run fully
    return arrayTwo
}
console.log(hotelGoodies(instructionTeam))
// output: ['Sarah 🎁', 'Austin 🎁', 'Trish 🎁', 'Elyse 🎁', 'Charlean 🎁', 'Nicole 🎁']

// using return would make the for loop stop when the first element is given
// need to store the values in a new array