// JAVASCRIPT CLASSES

// Classes are recipes for making objects. Data and action

const car = {
    make: 'GMC',
    model: 'Sierra',
    year: 2010,
    color: 'Blue'
}
// console.log(car);
// --> { make: 'GMC', model: 'Sierra', year: 2010, color: 'Blue' }

// to declare a class, use keyword 'class'
    // Pascal Case : each word in name is capitalized (MakeNewCar)
class Car {
    constructor() {
        this.make = "GMC",
        this.model = 'Sierra',
        this.year = 2010,
        this.color = 'Blue'
    }
}

let torinTruck = new Car()
// console.log(torinTruck);
// --> Car { make: 'GMC', model: 'Sierra', year: 2010, color: 'Blue' }

// instantiation : creating an instance of a class (an object)

// class DynamicCar {
//     constructor(makeString, modelString, colorString, yearNumber) {
//         this.make = makeString,
//         this.model = modelString,
//         this.year = yearNumber,
//         this.color = colorString
//     }
// }
// let myTruck = new DynamicCar('hyundai', 'elantra', 'grey', 2022)
// console.log(myTruck);
// --> DynamicCar { make: 'hyundai', model: 'elantra', year: 2022, color: 'grey' }

// update particular key-value pair; use dot notation
// myTruck.model = 'truck'
// console.log(myTruck);
// --> DynamicCar { make: 'hyundai', model: 'truck', year: 2022, color: 'grey' }


// class DynamicCar {
//         constructor(makeString, modelString, colorString, yearNumber) {
//             this.make = makeString,
//             this.model = modelString,
//             this.year = yearNumber,
//             this.color = colorString
//         }
//         carBoasting() {
//             return `My ${this.make} ${this.model} is super cool!`
//         }
//     }

// let neysDreamCar = new DynamicCar('Ford', 'GT500', 'Black', 2023)
// console.log(neysDreamCar);
// --> DynamicCar { make: 'Ford', model: 'GT500', year: 2023, color: 'Black' }

// console.log(neysDreamCar.carBoasting());
// --> My Ford GT500 is super cool!


// class DynamicCar {
//     constructor(makeString, modelString, colorString, yearNumber, electricBoolean) {
//         this.make = makeString,
//         this.model = modelString,
//         this.year = yearNumber,
//         this.color = colorString
//         this.isElectric = electricBoolean
//     }
//     carBoasting() {
//         return `My ${this.make} ${this.model} is super cool!`
//     }
//     wentElectric() {
//         this.isElectric = true
//     }
// }

// let neysDreamCar = new DynamicCar('Ford', 'GT500', 'Black', 2023, false)
// console.log(neysDreamCar);
// --> DynamicCar { make: 'Ford', model: 'GT500', year: 2023, color: 'Black', isElectric: false }
// neysDreamCar.wentElectric()
// console.log(neysDreamCar);
// --> DynamicCar { make: 'Ford', model: 'GT500', year: 2023, color: 'Black', isElectric: true }

class DynamicCar {
    constructor(makeString, modelString, colorString, yearNumber, electricBoolean) {
        this.make = makeString,
        this.model = modelString,
        this.year = yearNumber,
        this.color = colorString
        this.isElectric = electricBoolean
        this.isOperational = true // default value. dont need to pass argument for default values in constructor
    }
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool!`
    }
    wentElectric() {
        this.isElectric = true
    }
    brokeDown() {
        this.isOperational = false
    }
}
let neysDreamCar = new DynamicCar('Ford', 'GT500', 'Black', 2023, false)
neysDreamCar.brokeDown()
console.log(neysDreamCar);

const onlyOdds = (array) => {
    return array.filter(value => value % 2 !== 0)
  }

console.log(onlyOdds([1,2,3,4,5,6,7,8,9]));

let numArr = [5,2,3,1,4]

console.log(numArr.map(num => num * 3))



const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const transaction = (fullTransaction) => {
  let totalSum = [1, 1]
  for (let i = 0; i < accountTransactions1; i++)
  for (let i = 0; i < accountTransactions2; i++)
  for (let i = 0; i < accountTransactions3; i++)
  totalSum.push(totalSum[0] + totalSum[1])
  totalSum.push(totalSum[1] + totalSum[2])
  totalSum.push(totalSum[2] + totalSum[3])
  totalSum.push(totalSum[4] + totalSum[5]) 
  return(totalSum)
}



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

console.log(arrayLength(fibLength2));