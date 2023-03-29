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



const sum1 = (a,b) => {
  const result = a + b;
  return result;
};
const amount1 = sum1(4,9);         // 13


const sum2 = (a,b) => {
  return a + b;
};
const amount2 = sum2(3,3)          // 6


const sum3 = function(a,b) {
  return a + b;
};

sum3(4,4)                          // 8

const sum4 = (a,b) => {
 return a + b;
};                              

sum4(3,3)                           // 6


const sum5 = (a,b) => a + b; 
sum5(5,5)                          // 10










