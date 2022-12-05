// let yourName = "chris"

// if(true){
//     console.log(yourName)
// }


// for(i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is an even number!`)
//     } else {
//         console.log(`${i} is an odd number...`)
//     }
// }


// Create a for loop that logs each number from 1 - 20.

// for(let i=1; i<=20; i++){
//     console.log(i)
// }

// // Create a for loop that logs every other number from 1 - 20.

// for(let i=2; i<=20; i+=2){
//     console.log(i)
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.

// for(let i=1; i<=20; i++){
//     console.log(i*3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     } else {
//         console.log("ODD")
//     }
// }


const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

// for(let i = 0; i < nums.length; i++){
//      var largestNum = nums[0]
//      if(largestNum < nums[i]){
//        largestNum = nums[i]
//    }
    
// }
// console.log(largestNum)


// Create the code that will log the smallest number from the array.

// let smallestNum = nums[0]
// for(let i = 0; i < nums.length; i++){
//     if(smallestNum > nums[i]){
//         smallestNum = nums[i]
//     }
// }
// console.log(smallestNum)


// Create the code that will log the remainder of each number when divided by 2.

// for(i = 0; i < nums.length; i++){
//     console.log(`Remainder when ${nums[i]} is divided by 2: `, (nums[i] % 2))
// }


// const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.

// var splitString = myString.split("")
// var numOfE = 0
// for(i = 0; i < splitString.length; i++){
//     if(splitString[i] == 'e'){
//         numOfE = numOfE + 1
//     }
// }
// console.log(numOfE)

// Create the code that will log every other character in the string.

// var numOfNotE = splitString.length - (numOfE + 1)
// console.log(numOfNotE)

// 🏔 Stretch Goals

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// for(i = 5; i <= 15; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// for(i = 1; i <= 100; i++){
//     if((i % 3 === 0 && i % 5 === 0)){
//         console.log("fizzbuzz")
//     } else if(i % 3 === 0){
//         console.log("fizz")
//     } else if(i % 5 === 0){
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }