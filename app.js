// ... function // rest operator

// ...  // obj , arr, arr of object // spread operator // copy karnah


// spread Operator 
let arr = [1, 2, 3, 24, 44, 66543, 3, 0, 505,]
let arr2 = [7, 1321, 12321, 32121, 312213231, 0]

let arr3 = [...arr, ...arr2]

// arr + arr2 copied by spread operator
document.write(`${arr3} <br><br>`)


// & above code without (  comma , )
document.write(...(arr3))
document.write('<br><br><br><br>')


// spread Operator On Object

let obj = {
    first : '1',
    second : '2',
    end : '3'
}

let obj2 = {
    ...obj,
    lname: 'samad bhai'

}


console.log(obj2)




//Calling function & below created 
abc()

function abc(){
    console.log('hello')
}


// function expression 
// Escript 6 
let foo = function(){
    console.log('samad')
}

foo()


//ES6 FUNCTION 
// ARROW FUNCTION
// let abc = (a) =>{
//     document.write(a)
// }

// abc('samad')

// let abc = (a, b) =>{
//     document.write(a, b)
// }

// abc(`samad', 'kamil`)

let eq = (a,b,c) => a + b - c
document.write(eq(1,2,5))
