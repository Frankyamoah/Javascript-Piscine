// Filter function
function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Reject function
  function reject(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!func(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Partition function
  function partition(arr, func) {
    let matched = [];
    let unmatched = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        matched.push(arr[i]);
      } else {
        unmatched.push(arr[i]);
      }
    }
    return [matched, unmatched];
  }
  