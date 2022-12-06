// $ git checkout -b jest-initials1-initials2
// $ mkdir jest-student1-student2
// $ cd jest-student1-student2
// $ touch jest.test.js
// $ yarn add jest
// $ code .

// ----------- JEST -----------------

// npm - node package manager adds the required dependencies to run the application properly
// yarn - yet another resource negotiator; created by FaceBook to overcome the slow download from npm

// jest : testing suite for javascript
    // Test Driven Development (TDD) : break the code into a series of tests; smaller problems to approach; helps safely create code
        // Three different tests
            // 1) unit test : tests individual pieces of code
            // 2) integration
            // 3) end to end
            
            // Consider 3 elements when creating tests
            // input : what is the value you are passing into your function?
            // expected output : what is supposed to happen because of the input?
            // results : what value did you receive after invoking your function?
            
// -- PROMPT: Write a function that offers tea to a person. --

            // RED-GREEN REFACTOR PROCESS
            // RED
        // Write the test
        
        // describe method that groups the test, takes 2 arguments: name of function & call back function
        describe('tea', () => {
            // it method contains 2 arguments : the description of fxn & callback fxxn
            it ('offers tea to a person', () => {
                // 'expect statement' contains fxn call & jest matcher appending the expected output
                expect (tea()).toEqual("Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea.")
            })
        })
        
        // See the test fail
        // $ yarn jest
            // GOOD FAILURE
                //  FAIL  ./jest-notes.test.js
                //  tea
                //      ✕ offers tea to a person

                // ● tea › offers tea to a person

                //      ReferenceError: tea is not defined
        


    // GREEN
        // Write the code

        // PSEUDOCODE
        // input : none, self-invoking
        // output : string
            // "Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea."
        // declare function named tea
        
        const tea = () => {
            return "Aloha, Hotel2022, pinky up. Here's some Yerba Mate tea."
        }

        // See the test pass
            // yarn jest
                //  PASS  ./jest-notes.test.js
                // tea
                //   ✓ offers tea to a person (1 ms)

    // REFACTOR
        // Refactor, if necessary

// PROMPT: Write a test for a function that logs whether or not an item is soup.

describe ("soupTest", () => {
    it ("logs whether or not an item is soup", () => {
        expect(soupTest("yes")).toEqual("This is soup")
        expect(soupTest("no")).toEqual("This is not soup")
    })
})

    // FAIL  ./jest-notes.test.js
    // tea
    //   ✓ offers tea to a person (1 ms)
    // soupTest
    //   ✕ logs whether or not an item is soup

    // ● soupTest › logs whether or not an item is soup

    //   ReferenceError: soupTest is not defined

// PSEUDOCODE
    // declare a function called soupTest
    // input: string
    // output: string
        // if "yes" then return "This is soup"
        // if "no" then return "This is not soup"
        // use conditional statements to produce expected return

// const soupTest = (string) => {
//     if (string === "yes"){
//         return "This is soup"
//     } else if(string === "no"){
//         return "This is not soup"
//     }
// }

function soupTest(string) {
    if (string.toLowerCase() === "yes"){
        return "This is soup"
    } else if(string.toLowerCase() === "no"){
        return "This is not soup"
    } else{
        return "Please input Yes or No."
    }
}

    // PASS  ./jest-notes.test.js
    // tea
    //   ✓ offers tea to a person (1 ms)
    // soupTest
    //   ✓ logs whether or not an item is soup


// Using variables to store values
// PROMPT: Write a function that takes in two arrays and adds the arrays together and sorts the values in alphabetical order.

let coldActivities = ['sleep', 'drink hot cocoa', 'sit by fireplace', 'make soup']
let moreStuff = ['sledding', 'skiing', 'snow mobiling']

describe ("allColdActivities", () => {
    it ("combines two arrays and sorts them in alphabetical order", () => {
        expect (allColdActivities(coldActivities, moreStuff)).toEqual((coldActivities.concat(moreStuff)).sort())
    })
})

        //  FAIL  ./jest-notes.test.js
        //   tea
        //     ✓ offers tea to a person (1 ms)
        //   soupTest
        //     ✓ logs whether or not an item is soup
        //   allColdActivities
        //     ✕ combines two arrays and sorts them in alphabetical order

        //   ● allColdActivities › combines two arrays and sorts them in alphabetical order

        //     ReferenceError: allColdActivities is not defined

// PSUDEOCODE
    // declare function named allColdActivities that takes in two arrays, combines them, and sorts them in alphabetical order
    // input: two arrays of strings
    // output: one array of strings in alphabetical order

const allColdActivities = ((value1, value2) => (value1.concat(value2)).sort())
// console.log(allColdActivities(coldActivities, moreStuff))