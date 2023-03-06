/* Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements. */

function chunk(array, size) {
    const chunkedArr = []; // initialize an empty array to store the sub-arrays
    let index = 0; // initialize a variable to keep track of the current index
  
    while (index < array.length) { // loop through the array until we reach the end
      chunkedArr.push(array.slice(index, index + size)); // slice the array from the current index to the current index + size, and push the resulting sub-array into the chunkedArr
      index += size; // increment the index by the size
    }
  
    return chunkedArr; // return the chunked array
  }
  