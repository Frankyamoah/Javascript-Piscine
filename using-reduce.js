function adder(numbers, start) {
    return numbers.reduce((initialVal, current) => initialVal + current, start || 0);
  }
function sumOrMul(numbers,start) {
    return numbers.reduce((initialVal, current) => {
      if (current % 2 === 0) {
        return initialVal * current;
      } else {
        return initialVal + current;
      }
    }, start || 0);
  }

function funcExec(functions,start) {
    return functions.reduce((initialVal, current) => current(initialVal), start || null);
  }