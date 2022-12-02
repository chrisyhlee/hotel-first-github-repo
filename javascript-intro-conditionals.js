// Javascript
console.log(10 % 3)
console.log("hello Hotel!")
console.log("5+5=" , 5+5)

var name="Chris"

var name="Tricia"
console.log(name)

let myFavoriteNumber = 30
console.log(myFavoriteNumber)
console.log(myFavoriteNumber + 10)
myFavoriteNumber = 15
let yourFavoriteNumber = 11
console.log(myFavoriteNumber + yourFavoriteNumber)

console.log("My favorite number is " +myFavoriteNumber)

let myColor = "green"
myColor = "blue"

if(myColor === "green"){
    console.log("Have you considered purple?")
} else if (myColor === "blue"){
    console.log("Acceptable")
} else {
    console.log("Suggestion: Purple!")
}

// CHALLENGES

// Write the code that will log the outcome of 34 added to 71.

console.log(34 + 71)

// Write the code that will log the outcome of 67 subtracted from 123.

console.log(123 - 67)

// Write the code that will log the outcome of 56 multiplied by 23.

console.log(56 * 23)
// Write the code that will log the outcome of 45 divided by 5.

console.log(45 / 5)

// Write the code that will log the outcome of 5 to the power of 7.

console.log(5**7)

// Write the code that will log the whole number remainder of 33 divided by 6.

console.log(33 % 6)

// Write the code that will log the length of a string containing your name.

let name = 'Chris'
console.log(name.length)

// Write the code that will log whether your string includes the letter "e"?

console.log(name.includes('e')) 

// Write the code that will log the character at the first index of the string.

console.log(name[0])

// Write the code that will log the string in all uppercase letters.

console.log(name.toUpperCase())


// Is 34 divided by 3 greater than 67 divided by 2?

console.log((34/3) > (67/2))

// Does 5 evaluate to the same as "5"?

console.log(5 == "5")

// Does 5 strictly equal "5"?

console.log(5 === "5")

// Does !3 strictly equal 3?

console.log(3 !== 3)

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

console.log("LEARN".length === 5 && "Student".length === 7)

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

console.log("LEARN".length === 5 || "Student".length === 10)

// Does "LEARN" contain the subset "RN"?

console.log("LEARN".includes("RN"))

// Does "LEARN" contain the subset "rn"?

console.log("LEARN".includes("rn"))

// Does "LEARN"[0] strictly equal "l"?

console.log("LEARN"[0] === "l")

// Modify the code from the previous question to return true.

console.log("LEARN"[0] === "L")

// Consider the variables:

var theQuestion = 'life, the universe, and everything'
var theAnswer = 42

// Write the code that will log theAnswer divided by 2.

console.log(theAnswer / 2)

// Write the code that will log the length of theQuestion.

console.log(theQuestion.length)

// Write the code that will log the index of the character "f" in the theQuestion.

console.log(theQuestion.indexOf('f'))

// Write the code that will log the concatenation of the two variables.

console.log(theQuestion + theAnswer)

// Write the code that will log "the universe".

console.log(theQuestion.slice(6,18))

// Write the code that will log the character "l" from theQuestion.

console.log(theQuestion.charAt(0))

// Write the code that will log whether theQuestion.length is greater than theAnswer.

console.log(theQuestion.length > theAnswer)

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let sofa = 50
if(sofa <= 100){
    console.log("item is in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hungry = "yes"
hungry = "no"
if(hungry === "yes"){
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "green"
trafficLight = "yellow"
trafficLight = "red"
if (trafficLight === "green"){
    console.log("go")
} else if(trafficLight === "yellow"){
    console.log("slow down")
} else {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let numOne = 10
let numTwo = 20
if(numOne > numTwo){
    console.log(numOne)
} else if (numOne < numTwo){
    console.log(numTwo)
} else {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let numThree = 11
if(numThree === 0){
    console.log("zero")
} else if (numThree % 2 === 0){
    console.log("even")
} else {
    console.log("odd")
}

// Stretch Goals

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 0 
if(grade === 100){
    console.log('perfect score')
}
else if(grade === 0){
    console.log('no grade available')
}
else if(grade >= 90){
    console.log('A')
}
else if(grade >= 80){
    console.log('B')
}
else{
    console.log('D')
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let variable = 'fjlkasdjflsdkjfsl'

if(variable === false || variable === true){
    console.log(typeof variable)
}
else if(variable == 'string'){
    console.log(typeof variable)
}
else{
    console.log(typeof variable)
}
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = ''

if(password.length >= 12 && password.includes('!')){
    console.log('That is a mighty strong pasword!')
}
else if(password.length >= 8 || password.includes('!')){
    console.log('That password is strong enough.')
}
else{
    console.log('That is not a valid password.')
}