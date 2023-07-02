// Document.getElementById("count-el")
// write your first javaScript Code 
// let count=0;
// console.log(count);

 
// console.log(myAge);
//1. Create a variable, myAge , and set it's value to your age

//2. Log the myAge variable to the console 

// let myAge = 20;
// console.log(myAge);
   /** section 1 Lession5 **/
// let count = 5+7;
// console.log(count)

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// // console.log(firstBatch);
// console.log(count);

            /**Challange 1 **/ 

//1. Create  two variable myAge and humanDogRation
//2. Multiplying the two together and stroe the result in myDogAge
//3. Log the myDogAge to the console

// let myAge = 20;
// let humanDogRation = 7;

// let myDogAge = myAge *  humanDogRation;

// console.log(myDogAge);
 /** Lession 6 **/

//  let count = 5;

// //   count = 3;
 
// count = count + 1;  // 5+ 1

//   console.log(count);

  //1. Create a variable bonusPoints. Initializie its as 50. Increase it to 100
  //2. Decrease it down to 25, and then finally increase it to 70

//   let bonusPoints = 50;
//   console.log(bonusPoints);

//   bonusPoints = bonusPoints + 50;
//   console.log(bonusPoints);

//   bonusPoints = bonusPoints - 75;
//   console.log(bonusPoints);

//   bonusPoints = bonusPoints + 45;
//   console.log(bonusPoints);

/** Lession 10 */

// 1. Create a function {you-decide the name} that log 42 to console
// call/invoke the function

// function display(){
//     console.log("42")
// }

// display()

/** Lession 11 */

//1. Create a function the logs out the sum of all the laps time

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
 
// function lapSum(){
//     console.log(lap1 + lap2 + lap3)
// }

// lapSum()

/** Lession 12 */

//1. Create a function that increment the lapCompleted variable with one
//2. run it three time

// let lapCompleted = 0;

// function lapIncrement(){
//     lapCompleted = lapCompleted + 1;
//     console.log(lapCompleted)
// }

// lapIncrement()
// lapIncrement()
// lapIncrement()


/** Lession 18 */

// let userName = "peer"
// console.log(userName)

// //1. Create a variable, message, that store the string: "You have three new notification"
//  let message = "You have three new notifications"
//  console.log(message)
// let  messageToUser = message + ", " +userName + "!"
//  console.log(messageToUser)

//1. Create a new varible, messageToUser, that contains the message we have logged


/** Lession 20 */

// Create two variable name and greeting . The name variabe should store your name , 
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting ,that contatenates the two string 
// log myGreeting to the console

// let name = "Abhay Kumar"

// let greeting = "Hi, my name is  "

// console.log(name)
// console.log(greeting)

// let myGreeting = greeting + name
// console.log(myGreeting)

/** Lession 22 */

//1. Grab the welcome-el paragraph and store it in a variable called welcomeEl

//2. Crete two variable (name & greeting ) that contains your name 
//3. and greeting we want to render on the page 

//4. Render the welcome message uding welcomr.innerText

// let welcomeEl = document.getElementById("welcomeEl")

// let name = "Abhay Kumar"
// let greeting = "welcome "

// welcomeEl = greeting + name

// welcomeEl.innerText = welcomeEl

 /** Lession 23  **/

 //1. Add an emoji to the end 
 //2. Write your code below here 
 //3. Hint: count = count + 1


//  welcomeEl.innerText =  greeting + name + "#&128591"

//  let welcomeEl = document.getElementById("welcome-el")

// let name = "Abhay Kumar "
// let greeting = "welcome "


// welcomeEl.innerText = greeting + name
// // welcomeEl.innerText = welcomeEl.innerText +"#"
// welcomeEl.innerText +=  " #"


// --------------Recap --------------------------

// create two variable firstName and lastName
//concatenate the two variableinto a third variavble called fullName
//log the fullName to the console

// let firstName = "Abhay"
// let lastName = "Kumar"

// let fullName = firstName + " " + lastName

// console.log(fullName)


// Create a function that logs out "Hi there, Abhay" when called

// let name = "Abhay"
// let msg = "Hi there, "

// function strConcat(){
//   console.log(msg+name +"!")
// }
// strConcat();



// Create two function, add3Points() and remove1Points()

// let myPoints = 3

// function add3Points(){
//   myPoints += 3
// }

// function remove1Points(){
//   myPoints -= 1
// }
 
// add/remove points to/from myPoints variable
// add3Points()
// add3Points()
// add3Points()

// remove1Points()
// remove1Points()

// call the function to that line bleow logs out 10
// console.log(myPoints)


// When the user clicks on the purchaces button, render out
//"Somethings went wrong, Please try again" in the paragrapg
// that has id="error"

// let errorMsg =document.getElementByIda("error")

// function errorParapraph(){
//   errorMsg.textContent="Somethings went wrong, Please try again"
// }
// errorParapraph()

// create four functions: add(), subtract(), multiply(), and divide()
//call the correct function when the user clickson one of the buttons
//perform the given calculation using num 1 and num 2 
// render the result of the calculation in the paragraph with the id="sum-el"

// E.g. if the user clicks on the "plus" button, you should render
// "Sum: 10" (since 8+2 = 10) inside the paragraph with id "sum-el"

let num1 = 8
let num2 = 2

// document.getElementById("num1-el").textContent =num1
// document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
  sumEl.textContent = "Sum:" + num1 + num2
  // console.log("Sum:" + (num1 + num2))
  // alert(num1 + num2)
}

function subtract(){
  sumEl.textContent = "Subtraction:" + (num1 - num2)
  // console.log("Subtraction:" + (num1 - num2))
  // alert(num1 - num2)
}

function multiply(){
  sumEl.textContent = "Multiplication:" + num1 * num2
  // console.log("Multiplication:" + num1 * num2)
  // alert(num1 * num2)
}

function divide(){
  sumEl.textContent = "Division:" + num1 / num2
  // console.log("Division:" + num1 / num2)
  // alert(num1 / num2)
}

// add()
// subtract()
// multiply()
// divide()