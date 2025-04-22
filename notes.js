
// S C O P E S
// $ types: Globa;, Block, Module, function
// A scope is a set of code that has ur variables in it. Only that scope can acces ur vars

const a = 1
function test(){ // function scope
    const b = 2
    console.log("here",a,b)

    const c = 4 // Same name, howevr diferent variables bc diferent scopes

    if (a != b){ // block scope defined by {}, no need for if or functions
        let c = 5
        console.log(c) // outputs 5
    }
    console.log(c) // outputs 4
}

test()
//console.log(a,b) // Error. Can't access because wrong scope

console.log(globalVar) // Global var, excesable throughout folder

import { exportedVaar } from "./notes2" //Imports variab;e

 



// -----------------------------------------------------
// H O I S T I N G 

function sumFunc(a,b){ // Can define it anywhere
    return (a + b)
}

const sumConst = (a,b) => a + b // Built in so no hoisting :(

console.log(sumFunc(1,3))
console.log(constFun(1,3))

// Takes some of ur code and automatically movies it to the top of ur file
// Works w/ functions 
// not with const or let keywords
// var can be hoisted but it works different

console.log(Aa);

var Aa = 1;
// hoists the var intilization but not what it is defined as (You have to define it seperatley)




// -----------------------------------------------------
// C L O S U R E
// Functions that access variables outside of it
// Functions defines in other functions

function outer(){ // Private variables essentially
    let message = "hellow"

    function inner(){ // Closure
        console.log(message)
    }

    inner()
}

outer()



function createCounter(){
    let count = 0
    function incriment(){ // State maintanance
        count++;
        console.log(`count increased to ${count}`)
    }

    function getCount(){
        return count
    }

    return {incriment, getCount}
}

const counter = createCounter




// ------------------------------------------------
// M E T H O D   C H A I N I N G
// Calling one method after another in one continues line of code

// ----No Chain----

let username = window.prompt("Enter ur username")

username = username.trim(); // trims whitespace

let letter = username.charAt(0); //1st letter
letter = letter.toUpperCase()

let xChar = username.slice(1) //all letters after index 0
xChar = xChar.toLowerCase()

username = letter + xChar

console.log(username)

// ----Chaining----
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)




// ------------------------------------------------
// C A L L B A C K S
// A function that is passed as an argument in a another function
// Used for async operations

//"When ur done, call this next"


// Ex: 1
Hello(GB) // 'GB'  is the callback, only runs when Hello is done

function Hello(callback){
    setTimeout( function() {
        console.log("hello")
    }, 3000)

    callback() // paramater name w/ parnthesis
}

function GB(){
    console.log("Goodbye")
}


// Ex: 2
numSum(logRes,2,3)

function numSum(callback,x,y){ // Can still use normal paramaters
    let result = x + y
    callback(result)
}

function logRes(result){
    console.log(result)
}

// C A L L B A C K   H E L L
// When callbacks are nested w/ in other callbacks to the point where you can't read it

function task1(callback){
    setTimeout(() => { console.log("task 1 complete")
        callback()
    }, 3000)
    
}
function task2(callback){
    setTimeout(() => { console.log("task 1 complete")
        callback()
    }, 2000)
}
function task3(callback){
    setTimeout(() => { console.log("task 1 complete")
        callback()
    }, 2050)
}
function task4(callback){
    setTimeout(() => { console.log("task 1 complete")
        callback()
    }, 1500)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks complete")
            })
        })
    })
})




// ------------------------------------------------
// A S Y N C R O N O U S  C O D E
// Sync - Code is run line by line; waits for an operation to be complete b4 moving to next task
console.log("1")
console.log("2")
console.log("3")

// Async - Mult operations happen at once; does not block code; does not wait
setTimeout(() => console.log("1"), 3000) // Happens last, does not wait to exucute other code while waiting
console.log("2")
console.log("3")

f1(f2)

function f1(callback){
    setTimeout(() => {console.log("1")
        callback()
    }, 3000)
}

function f2(){
    console.log("2")
    console.log("3")
}

// ------------------------------------------------
// P R O M I S E
// Object that manages asyncronous opererations
// Pending -> Resolved or Rejected

// EX:

// CHORES
// 1. Walk the dof
// 2. Clean the kitchen
// 3. Take trash out

function walkDoge(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("Doge has been walked")
    }, 1500)} )
}
function cleanKitch(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("kitchen has been cleaned")
    }, 2500)} )
}
function takeTrash(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("trash has been took")
    }, 500)} )
}

walkDoge.then(value => {console.log(value); return cleanKitch()}).then(value => {console.log(value); return takeTrash()}).then(value => {console.log(value); console.log("You finished all ur chores!!")})
// Will not continue if one of the things is rejected

// walkDoge(() => { // No promises = callback hell :(
//     cleanKitch(() => {
//         takeTrash(() => {
//             console.log(" You complete chores")
//         })
//     })
// })




// ------------------------------------------------
// A W A I T / A S Y N C
//Async = make a promis return a promise
//Await = makes an async function wait for a promise

// Allows asyncro code to be written in a syncroneous manner

function walkDoge(){ 
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("Doge has been walked")
    }, 1500)} )
}
function cleanKitch(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("kitchen has been cleaned")
    }, 2500)} )
}
function takeTrash(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("trash has been took")
    }, 500)} )
}

async function doChores() { // returns a promise that doesn't resolve or reject
    const walkDogRes = await walkDoge();// Await can only be used in async functions
    console.log(walkDogRes)

    const cleanKitchRes = await cleanKitch()
    console.log(walkDogRes)

    const takeTrashRes = await takeTrash()
    console.log(cleanKitchRes)

    console.log("You finished ur chores!!!")
}

doChores()




// ------------------------------------------------
//J S O N


