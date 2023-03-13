// Map function implementation
function map(arr, func) {
    // Create an empty array to store the results
    let result = [];
  
    // Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
      // Call the provided function with the current element, index and the whole array
      // Push the result of the function call to the results array
      if (arr[i] !== undefined) {
        result.push(func(arr[i], i, arr));
      }
    }
  
    // Return the results array
    return result;
  }
  
  // FlatMap function implementation
  function flatMap(arr, func) {
    // Use the reduce method to apply the provided function to each element of the input array
    // and concatenate the results to a single array
    return arr.reduce((acc, curr, index, arr) => 
      acc.concat(func(curr, index, arr)), []
    );
  }
  