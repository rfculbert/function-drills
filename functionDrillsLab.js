/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/
console.log("----p1-----")
//CODE HERE
function helloWorld(){
  console.log("hello, World!")
}
helloWorld()
////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/
console.log("---p2----")
//CODE HERE

const jsNinja = () => {
  return "I am a Javascript ninja!"
}

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/
console.log("---p3---")
//CODE HERE

function printName(name){
  console.log(name);
};
printName("Robert");
printName('Trina');
printName("Garrett");
printName("Mykenzie");

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/
console.log("---p4---")
//CODE HERE

const greeting = (name) => {
  console.log(`Hello, ${name}`)
}
greeting("Robert");
greeting("Garrett")
greeting("Trina")
greeting("Mykenzie")
////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/
console.log("---p5---")
//CODE HERE

const compareNums = (num1, num2) =>{
  if(num1 >= num2){
    console.log(num1)
  } else {
    console.log(num2)
  }
}
compareNums(2, 5)
compareNums(2, 1)
compareNums(7, 7)
////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/
console.log("---p6---")
//CODE HERE

function add(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 + num2;
}

let sum = add("43", 52);
console.log(sum)

////////////////// PROBLEM 7 ////////////////////
console.log("---p7---")
/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
// console.log('declaration')
console.log('expression')



////////////////// PROBLEM 8 ////////////////////
console.log("---p8---")
/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

console.log('arrow')
// console.log('declaration')
// console.log('expression')

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

const exclaimThree = (str) => str.toUpperCase() + '!!!';

console.log(`this is a message, ${exclaimThree('for the beginners')}, do you see now!`)


////////////////// PROBLEM 9 ////////////////////
console.log('---p9---')
/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
console.log('declaration')
// console.log('expression')


////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' 
  (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/
console.log('---p10---')
//CODE HERE

const nameCheck = (name) => {
  if(name.includes('Steven')){
    return 'What is up Steven?'
  } else if (name.includes('Bryan')){
    return 'Hey Bryan!'
  } else {
    return `Cool name, ${name}.`
  }
}

let nameGreeting = nameCheck('Robert');
console.log(nameGreeting);

////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/
console.log("---p11---")
//CODE HERE

function faveColorFinder(color){
  if(color.includes('red')){
    return 'red is a great color';
  } else if (color.includes('green')){
    return 'green is a solid favorite color';
  } else if (color.includes('black')){
    return 'so trendy';
  } else {
    return 'you need to evaluate your favorite color choice'
  }
}

let colorRating = faveColorFinder('red')
let colorRating2 = faveColorFinder('green')
let colorRating3 = faveColorFinder('black')
let colorRating4 = faveColorFinder('blue')

console.log(colorRating)
console.log(colorRating2)
console.log(colorRating3)
console.log(colorRating4)

////////////////// PROBLEM 12 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/
console.log("---p12---")
//CODE HERE

const printAllNames = (arr) => {
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printAllNames(namesArr)

////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/
console.log('---p13---')
//CODE HERE

function thatsOdd(num){
  if(num % 2 === 0){
    return 'thats not odd';
  } else {
    return 'That is odd indeed!'
  }
}

let oddChecker = thatsOdd(9)
let oddChecker2 = thatsOdd(10)
let oddChecker3 = thatsOdd(2)
let oddChecker4 = thatsOdd(77)

console.log(oddChecker)
console.log(oddChecker2)
console.log(oddChecker3)
console.log(oddChecker4)

////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/
console.log('---p14---')
//CODE HERE

const bestMovie = (string) => `${string} is the best movie ever!`

let bestMov = bestMovie('Sharknado')
console.log(bestMov)


////////////////// PROBLEM 15 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/
console.log('---p15---')
//CODE HERE



function bigOrSmall(arr){
  let answers = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 100){
      answers.push("Big")
    } else if(arr[i] <= 100){
      answers.push('small')
    }
  } return answers;
}

let arrayEvaluator =  bigOrSmall(bigOrSmallArray);
console.log(arrayEvaluator)

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), 
  and loser (which will be a string).
  The function should loop over the array of contestant names. 
  If the loser string appears in the array, splice it out. Return the new contestants array.
*/
console.log("---p16---")
//CODE HERE

function theEliminator(contestants, loser) {
  for (let i = 0; i < contestants.length; i++){
    if (contestants[i].includes(loser)){
      contestants.splice(i, 1);
    }
  } return contestants
}

let newContestants = theEliminator(contestants, loser)
console.log(newContestants)

////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/
console.log('---p17---')
//CODE HERE

function allUpperCase(string){
  return string.toUpperCase()
}

let newString = allUpperCase(sampleString);
console.log(newString)

////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/
console.log('---p18---')

function emailCheck(email){
  let newEmail = String(email).trim();
  if (newEmail.includes('@')){
    return 'Email Verified'
  } else {
    return 'Not a valid email'
  }
}

console.log(emailCheck('rculbert@gmail.com'))
////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. 
  Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. 
  Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/
console.log('---p19---')
//CODE HERE

function buyFrogs(gold){
  let frogs = 0;
  while (gold >= 3){
    frogs += 1
    gold -= 3
  } return frogs
}

let totalFrogs = buyFrogs(2)
console.log(totalFrogs)
////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... 
  However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. 
  Re-write the function you used in the previous problem (give it the same name, just add a 2 to the end of it) 
  that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE


////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. 
  In the body of the function, write logic to determine if the array is in ascending order. 
  The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, 
  `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/
console.log('---p21---')
//CODE HERE

function asOrDesc(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  } return true;
}

console.log(asOrDesc(sampleArray))

////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['cute']

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ['cute, squeaky']

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ['cute, squeaky, nautical']

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ['cute, fluffy']




// function addToZero(arr){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] + arr[i + 1] != 0 || arr[i] + arr[i + 2] != 0 || arr[i] + arr[i + 3] != 0 || arr[i] + arr[i + 4] != 0){
//       i++
//     } 
//   }
// }

console.log('---code challenge---')

let numArr1 = [1, 4, 11, 2, 37, -4]
let numArr2 = [0, 21, 33, 6, 0, -9] 
let numArr3 = [0, 1, 2, 3, 4, 5]

function addToZero(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if (arr[i] + arr[j] == 0){
        return true;
      }
    }
  } return false;
}

console.log(addToZero(numArr1))
console.log(addToZero(numArr2))
console.log(addToZero(numArr3))