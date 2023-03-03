function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += a;
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      return -result;
    } else {
      return result;
    }
  }
  
function divide(a, b){
    // returns error if divisor is 0
if (b === 0){
    Error('division by zero not possible');
}
// returns 0 if the dividend is zero
if (a === 0){
     return 0;
}
// Determine the sign of the result
const sign = (a < 0) !== (b < 0) ? -1 : 1;

// next convert both operands to positive numbers
a = Math.abs(a);
b = Math.abs(b);
let quotient = 0;  
while (a >= b){
    a -= b; 
    quotient++
}
return sign * quotient 
    }


    function modulo(a, b) {
        if (b === 0) {
          return NaN;
        }
        let aNegative = false;
        let bNegative = false;
        if (b < 0) {
          b = -b;
          bNegative = true;
        }
        if (a < 0) {
          a = -a;
          aNegative = true;
        }
        let remainder = a;
        while (remainder >= b) {
          remainder -= b;
        }
        if (bNegative) {
          remainder = -remainder;
        }
        if (aNegative && bNegative || !aNegative && !bNegative) {
          remainder = -remainder;
        }
        return remainder;
      }
      