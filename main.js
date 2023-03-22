function myFunction1(a,b) {
 return a * b
}
console.log(myFunction1(3,5))   // 15

// or

function myFunction2(a,b) {return a / b}
console.log(8,4)               //  2


function myFunction3(a,b) {return a + b}
console.log(myFunction3())        // NaN


let x = function(a,b){return a - b}
let y = x(15,5)                   
console.log(y)                    // 10