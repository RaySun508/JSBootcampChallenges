/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  


function stringReverse(str) {

    let reversed = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  


// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
