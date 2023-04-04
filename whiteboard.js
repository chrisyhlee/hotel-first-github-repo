// input: string
// output: every other letter in caps starting with first letter
// loops through string
// if index % 2 !== 0 return .touppercase


// const camelLetters = (str) => {
//     let camelStr = ""
//     for (let i=0; i < str.length; i++) {
//         if (i === 0) {
//             camelStr = str.charAt(i).toUpperCase()
//         } else if (i % 2 === 0) {
//             camelStr = camelStr + str.charAt(i).toUpperCase()
//         } else {
//             camelStr = camelStr + str.charAt(i).toLowerCase()
//         }
//     }
//     return camelStr

// }
// // console.log('hello'[3]);
// console.log(camelLetters('hello There CHriS'));

// const closeSecondDiv = (str) => {
    
// }

str = 'hello'
arr = ['hello']
// console.log(Array.from(str))
// console.log(String.from(['hello']));

const fibFxn = (n) => {

    let fibArr = []
    let firstNum = 0
    let secondNum = 1
  
    for(var i=0; i<n; i++){
        fibArr.push(secondNum);
        let nextNum = firstNum+secondNum; 
        firstNum = secondNum; 
        secondNum = nextNum;
    }
    // fibArr.shift()
    return fibArr
  }

//   console.log(fibFxn(8))

const midLetter = (s) => {
    if (s.length % 2 !== 0) {
        strIndexOdd = Math.floor(s.length / 2)
        return s[strIndexOdd]
    } else if (s.length % 2 === 0) {
        strIndex = Math.floor(s.length / 2)
        return s[strIndex - 1] + s[strIndex]
    }
}

// console.log(midLetter('hellos'));

const paliChecker = (str) => {
    reverseStr = str.split('').reverse().join('')
    return str === reverseStr ? `${str} is a palindrome` : `${str} is not a palindrome`
}

// console.log(paliChecker('racecar'));

const nameArray = ["Chris", "Trish", "Jake"]

const secret = (arr) => {
    return arr.map(name => name[0]).join("")
}

console.log(secret(nameArray))