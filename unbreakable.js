/*Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

function split(string, delimiter) {
    const result = [];
    let currentChunk = '';
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === delimiter) {
        result.push(currentChunk);
        currentChunk = '';
      } else {
        currentChunk += string[i];
      }
    }
  
    if (currentChunk !== '') {
      result.push(currentChunk);
    }
  
    return result;
  }
  
  function join(arr, delimiter) {
    // Create a new string to store the joined array
    var joinedString = "";
  
    // Loop through each element of the array
    for (var i = 0; i < arr.length; i++) {
      // Append the current element to the joined string
      joinedString += arr[i];
  
      // If we're not at the last element of the array, append the delimiter
      if (i !== arr.length - 1) {
        joinedString += delimiter;
      }
    }
  
    // Return the joined string
    return joinedString;
  }
  