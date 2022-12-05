// Functions

// const makeCoffee = (coffeeType) => {
//     return `Your ${coffeeType} is made!`
// }
// console.log(makeCoffee('cold brew'))

const makeCoffee = (coffeeType, coffeeSize) => {
    let coffeeSizeLower = coffeeSize.toLowerCase()
    if(coffeeSizeLower === "small"){
        return `Your ${coffeeType} is $4.`
    } else if(coffeeSizeLower === "medium"){
        return `Your ${coffeeType} is $5.`
    } else if (coffeeSizeLower === "large"){
        return `Your ${coffeeType} is $6.`
    } else {
        return "Something went wrong."
    }
}
// console.log(makeCoffee('latte', 'MedIUm'))
// output -> Your latte is $5.

