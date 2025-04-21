
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
