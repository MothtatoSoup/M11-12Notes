
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

