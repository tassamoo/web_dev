// let boxBtn = document.getElementById("box-btn")

// boxBtn.addEventListener("click", function() {
//     console.log("I want to open the box!")
// });

// //practice 01
// const playerName = "Moo"
// let credits = 45


// credits -= 10

// console.log(`${playerName} has ${credits} credits`)

// //practice let const

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 Days"

// shippingCost = 15
// shippingTime = "7-14 Days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost:" + fullPrice + ". It will arrive in" + shippingTime)


// //practice 02 - using innerHTML
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

// //template strings/literals

// const recipient = "Tas"
// const sender = "Moo"
// const shippingTime = "5-12 Days"

// //Refactor the email string to use template strings
// const email = "Hey " + recipient + ", your order has been shipped!"
// const email2 = `Hey ${recipient}, your order has been shipped by ${sender} !`
// console.log(email)
// console.log(email2)

// //template strings on multiple lines
// const message = `
// Hey ${recipient}, 

// your order has been shipped by ${sender}!  rrive in ${shippingTime}
// `
// console.log(message)

//notes:
// // chrome://extensions/

// let myLeads = [];
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()
// })


// function renderLeads(){
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         const element = myLeads[i]
//         //listItems += "<li><a target='_blank' href=' " + element +"'>" + element + "</a></li>"
        
//         //Template String
//         listItems += `
//         <li>
//             <a target='_blank' href='${element}'>
//                 ${element}
//             </a>
//         </li>
//         `
    
//     }
//     ulEl.innerHTML = listItems
// }


// //Truthy and Falsy Values

// const credits = 0

// if (credits > 0){
//     console.log("You have enough credits")
// } else {
//     console.log("You don't have enough credits")
// }

// const credits = 0

// if (credits > 0) {
//     console.log("You have enough credits")
// } else {
//     console.log("You don't have enough credits")
// }


// //falsy value in JS
// false
// 0 
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalize emptiness
// NaN

// let currentViewers = null

// currentViewers = ["Jane", "John", "Moo"]

// currentViewers = null

// if (currentViewers) {
//     console.log("We have viewers!")
// }

// let trueOrFalse = Boolean("hello")

// console.log(Boolean("")     ) //false
// console.log(Boolean("0")    ) //true
// console.log(Boolean("100")  ) //true
// console.log(Boolean(null)   ) //false
// console.log(Boolean([0])    ) //true
// console.log(Boolean(-0)     ) //false

// // writing first function parameter

// const welcomeEl = document.getElementById("welcome-el")

// //                 parameters
// function greetUser(greeting, name, title) {
//     //literal string
//     // welcomeEl.textContent = greeting + " Welcome to the site" + name

//     //Template String
//     welcomeEl.textContent = `${greeting}, ${name}, ${title}`
// }
// //        arguments
// greetUser("Howdy", "Moo", "The General")


// //Numbers as function parameters

// //create a function, add(), that adds two numbers together and returns the sum
// function add(num1, num2){
//     return num1 + num2
// }

// console.log(add(1,2))
// console.log(add(1,3))

// //arguments created outside of the functions and passed in. Meanwhile parameters are created inside the function

// what are greeting and name? parameters
// what are "Howdy" and "Moo"? arguments
// what are num1 and num2? parameters
// what are 1 and 2? arguments 

// //Arrays as parameters
// //create a function getFirst(arr), that returns the first tem in the array
// function getFirst(arr){
//     return arr[0]
// }

// //call it with an array as an argument to verify that it works

// let names = getFirst(["Moo", "John", "Jane"])
// console.log(names)


// //let and const practice

// // SETTING THE STAGE
// const player = "Moo"
// const opponent = "Mafaza"
// const game = "Amazing Fighter"

// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent} ! ${player}  lost the game`)
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// //log out items in an array
// let myCourses = ["HTML", "CSS", "JS"]

// function logItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// logItems(myCourses)

// // //save to localStorage
// // localStorage.setItem("myCredits", JSON.stringify(myCredits))

// // let myCredits = localStorage.getItem("myCredits")
// // console.log(myCredits)


// //addEventListener and object in array
// let data = [
//     {
//         player: "Moo",
//         score: 52
//     },
//     {
//         player:"John",
//         score: 41
//     }
// ]

// const mooBtn = document.getElementById("moo-btn")
// mooBtn.addEventListener("click", function(){
//     console.log(data[0].score)
// })

// //generate sentence
// function generateSentence(desc, arr){
//     let baseString = `THe ${arr.length} ${desc} are `
//     const lastItem = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastItem) {
//             baseString += "and " + arr[i] + "."
//         } else {    
//         baseString += arr[i] + ", "
//         }
//     }
//     return baseString
// }

// const sentence = generateSentence("highest mountains", ["Kilimanjaro", "Everest", "Denali"])
// console.log(sentence)


//Render images
 const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg",
]

const container = document.getElementById("container")

function renderImages() {
    for (let i = 0; i < imgs.length; i++) {
        const img = document.createElement("img")
        img.src = imgs[i]
        container.appendChild(img)
    } 
}

renderImages()