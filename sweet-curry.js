// Curried function that multiplies two numbers
function mult2(x) {
    return function(y) {
      return x * y;
    }
  }
  
  // Curried function that adds three numbers
  function add3(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  
  // Curried function that subtracts four numbers
  function sub4(x) {
    return function(y) {
      return function(z) {
        return function(w) {
          return x - y - z - w;
        }
      }
    }
  }
  