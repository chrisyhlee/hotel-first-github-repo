JavaScript Introduction

Today we will be covering JavaScript Introduction.

What is JavaScript?
JavaScript is a scripting language, which means it's used to create code that will make a page react to interactions from a user.

So if we think of HTML as the bones or skeleton of the webpage, and CSS as the skin or outer appearance, we can think of JavaScript as the muscular system. It's what makes it move, or able to interact: dyanamic.

- - - - - Share Screen - - - - - -

JavaScript allows us to perform logic and manipulate data. In order to do that, JavaScript has to know what type of data we are working with. To specify what the type of data is, we can use Data Types.

There are 2 basic categories of data types in Javascript: primitive and composite. Today, we'll be focusing on primitive data types.

In JavaScript, there are six primitive data types.
Can anyone give me an example of one?
- Number
- String
- Boolean
- Undefined
- Null
- Symbol

Number
The `Number` data type includes integers that can be positive, negative, or zero, and also includes fractions, which are known as Floats.

With Numbers, we can perform some basic math

We can add
10 + 10

Subtract
10 - 5

Multiply
5 * 5

Divide
10 / 2

We can even do exponents
5 ** 2

And there's another fun thing called a Modulo, does anyone remember what that does?

10 % 2

To see the results of this math, we can use something called console.log

.log is a built-in method in JavaScript that will log whatever is inside its parenthases for us developers to see. We attach it to console so we can see it in our developer console.

So we can do console.log(5 + 5)
And when we run node <filename> in our terminal, we can see the result of what we put in the parenthases of our console.log

Now we can see that 5 + 5 is giving us 10
If we log 10 % 2, what do you think we will get?
And what about 10 % 3?

console.log is a very useful tool in general


Strings
- Any characters in JS that are surrounded by a set of quotes "like this"
- Can use single or double, I like to use double but technically you can use either

Strings can contain any character and it will still be a data type of string.
For example: "12345" is still a string

In JS, there are a lot of things we can do to strings, one of them being concatenation.
Concatenation is the joining of multiple strings, and we can perform concatenation by using the plus sign +
"he" + "llo"
=> "hello"
"hello " + "world"
=> "hello world"

Strings also have something called an `index`
Can anyone tell me what an index is?

Index: The placement of a character, always starts from 0

So let's say we have this string: "I am a string"
Each letter and space have a specific placement they are assigned to. We know the index always starts at 0, so this 'I' is located at index 0. Can anyone tell me what index the letter 'm' is at?



Booleans
Boolean expressions return either true or false. So something can either be true or false.

Let's look at some examples of Booleans being returned

console.log(true == false)
=> false

So in this example, our log returned a Boolean of false, which is telling us that, "hey, what you put in these parenthases is false"

So what do you think would happen if we were to log this?
console.log(3 == "3")
We get true, because 3 is in fact equal to 3

But what if we did this?
console.log(3 === "3")
We get false. This is because these two operators are equality operators, and they mean different things. The first one examines loose equality. So it looks at the Number 3, and the String 3, and converts the two items to the same data type before making the comparison, which is known as `Type Coercion`. On the other hand, the strict equality operator requires the two elements being compared to be exactly the same, including data type, in order to return true.

We covered equality operators, but there are also relational and logical operators.

Relational Operators
As the name states, relational operators look for a relationship between two elements.

These are the >, <, >=, <= operators.
We can make comparisons with them that will return a Boolean.
2 > 0
=> true
5 >= 10
=> false

Logical Operators
Logical 'and', logical 'or', and 'not'

Logical 'and' is denoted by && and states that both sides of the equation must be true.
2 > 0 && 5 > 2
=> true
5 > 1 && 20 <= 15
=> false

Logical 'or' is denoted by || and states that at least one side of the equation must be true.
5 > 1 || 20 <= 15
=> true

Logical 'not' is denoted the bang operator '!' which sets the logical opposite
!true
=> false
!false
=> true
5 === 5
=> true
5 !== 5
=> false



Undefined
- A value is not assigned

Null
- There is nothing; absence of anything

Symbol
- Not going to worry about Symbols just yet.



Variables
- Variables are containers that store and label data

To create a variable, we need to perform our variable declaration. There are several ways to declare variables, but for now we will use the keyword 'let'.

So first comes the variable declaration:
let
Then comes the name of the variable, which can be almost anything you want, but should always communicate intent. Variable names in JavaScript should be in camelCase, which looksLikeThis. The first word is lowercase, and every following word starts with a capital letter. Kind of looks like a camel.

let myNum = 2

We are assigning the number 2 to the variable 'myNum'

So now, if we console.log myNum, we should get an output of 2 in the console.

