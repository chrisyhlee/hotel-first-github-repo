// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

  const fibLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  
  const fibLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
  // b) Create the function that makes the test pass.
	
	const arrayLength = (num) => {
		let fibArr = [1, 1]
		for(let i=0; i<num-2; i++) {
			fibArr.push(fibArr[i] + fibArr[i+1])
		}
		return fibArr
	}
	// console.log(arrayLength(fibLength1), arrayLength(fibLength2));

  // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
  // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
  
  // a) Create a test with expect statements for each of the variables provided.
  
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
	
  // Expected output: [10, 15, 20, 45, 60, 65, 100]

  // b) Create the function that makes the test pass.

	const sorted = (obj) => {
		let valuesArray = Object.values(obj)
		return valuesArray.sort((a,b) => a-b)
	}
  
	console.log('first test: ', sorted(studyMinutesWeek1), 'second test: ', sorted(studyMinutesWeek2));

  // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
  

  // a) Create a test with expect statements for each of the variables provided.
  
  const accountTransactions1 = [100, -17, -23, -9]
  // Expected output: [100, 83, 60, 51]
  
  const accountTransactions2 = [250, -89, 100, -96]
  // Expected output: [250, 161, 261, 165]
  
  const accountTransactions3 = []
  // Expected output: []
  
  // b) Create the function that makes the test pass.
  
	// const sum = (arr) => {
	// 	let output = []
	// 	for(let i=0; i<arr.length; i++) {
	// 		if(i === 0) {
	// 			output.push(arr[i])
	// 		} else {
	// 			output.push(arr[i] + output[i-1])
	// 		}
	// 	}
	// 	return output
	// }

  const sum = (arr) => {
    let accumulatedSum = 0
    return arr.map(num => accumulatedSum += num)
  }

	console.log('first test: ', sum(accountTransactions1));
	console.log('second test: ', sum(accountTransactions2));
	console.log('third test: ', sum(accountTransactions3));


	let li = [1,2,3]
	let l2 = 500
	let summ = parseInt(li.reverse().join(''))
	console.log(summ.toString().split(''))


  // WEEK 5

//   # --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

// beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

// letter_o = 'o'
// # Expected output: ['coffee', 'soda water']
// letter_t = 't'
// # Expected output: ['tea', 'water', 'soda water']


// # -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
// # HINT: Google 'ruby get rid of nested arrays'

// us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
// # Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


// # --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

// # Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



// # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

// # Expected output example: my_bike.pedal_faster(10) => 10
// # Expected output example: my_bike.pedal_faster(18) => 28
// # Expected output example: my_bike.brake(5) => 23
// # Expected output example: my_bike.brake(25) => 0









// - - - - - - - - - Week 6/7 - - - - - - - - - - - -


// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// const capitalizeMe = (arr) => {
//   return arr.map((value) => {
//     let splitArr = value.name.split(' ')
//     let emptyArr = []
//     splitArr.map((value) => {
//       return emptyArr.push(value[0].toUpperCase() + value.substr(1) + ' ')
//     })
//     return `${emptyArr.join('')}is ${value.occupation}.`
//   })
// }
// console.log(capitalizeMe(people))

const capitalizeMe = (arr) => {
  return arr.map(obj => {
    let capName = obj.name.replace(/\b\w/g, (char) => char.toUpperCase())
    return `${capName} is ${obj.occupation}`
  })
}

console.log(capitalizeMe(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

const remainder = (arr) => {
  let numArr = arr.filter(value => typeof value === "number")
  return numArr.map(num => num % 3)
}

console.log(remainder(hodgepodge1), remainder(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const cubed = (arr) => {
  return arr.map(num => num ** 3).reduce((a, b) => a + b, 0)
}

console.log(cubed(cubeAndSum1), cubed(cubeAndSum2))