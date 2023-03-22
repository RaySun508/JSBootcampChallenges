/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max() {
return 10;
return 20; 
return 40;

}

function addUnknown() {
  function addUnknown(a = 0, b = 0, c = 0, d = 0, e = 0) {
    return a + b + c + d + e;
  }
  
}

function evenOrOdd() {
const num1 = 10;
const num2 = 20;   
const num3 = 40;

  if (num3 > num1 <= num3 < num2) {
console.log('inside')}

}

function operator() {
  function operator(a, b, c) {
    if (a + b === c) {
      return 'plus';
    } else if (a - b === c) {
      return 'minus';
    } else if (a * b === c) {
      return 'multiply';
    } else if (a / b === c) {
      return 'divide';
    } else {
      return null;
    }
  }
 
  
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};

