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


const sum6 = (a = 0,b = 0) => {
  return a + b;
};

sum6(3,2)   // 5
sum6(3)     // 3
sum6()      // 0

const sum7 = (a,b) => {
 return a + b;
};

sum7(3,2)   // 5
sum7(3)      // NaN
sum7()       // NaN


const sum8 = (...args) => {
 return args[0] + args[1];
};

sum8(3,2,2,3,23)  // 5
sum8()            // NaN

const sum9 = (a,...args) => {
  return args[0] + args[1];
};

sum9(1,2,3)       // 5
console.log(sum9(1,2,3))










