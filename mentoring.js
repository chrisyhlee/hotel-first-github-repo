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
  
	const sum = (arr) => {
		let output = []
		for(let i=0; i<arr.length; i++) {
			if(i === 0) {
				output.push(arr[i])
			} else {
				output.push(arr[i] + output[i-1])
			}
		}
		return output
	}

	console.log('first test: ', sum(accountTransactions1));
	console.log('second test: ', sum(accountTransactions2));
	console.log('third test: ', sum(accountTransactions3));


	let li = [1,2,3]
	let l2 = 500
	let summ = parseInt(li.reverse().join(''))
	console.log(summ.toString().split(''))