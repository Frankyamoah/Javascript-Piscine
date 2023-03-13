// Map function implementation
function map(arr, fn) {
    // Create a new array to store the mapped values
    const mappedArr = [];
  
    // Loop through the array and apply the function to each element
    for (let i = 0; i < arr.length; i++) {
      mappedArr.push(fn(arr[i], i, arr));
    }
  
    // Return the new mapped array
    return mappedArr;
  }
  
  // FlatMap function implementation
  function flatMap(arr, fn) {
    // Use map() to apply the function to each element and flatten the result
    return arr.map(fn).flat();
  }
  