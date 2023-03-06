/*Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

// Define a function named 'split' that takes two arguments: a string and a separator character.
function split(str, separator) {
    // Create an empty array to hold the split substrings.
    const result = [];
  
    // Declare a variable to keep track of the starting index of each substring.
    let startIndex = 0;
  
    // Check if the separator is undefined, null, or an empty string.
    if (!separator) {
      // If there is no separator, split the string into individual characters and add them to the result array.
      for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
      }
    } else {
      // If there is a separator, find the index of the first occurrence of the separator in the string.
      let endIndex = str.indexOf(separator, startIndex);
      while (endIndex !== -1) {
        // While there are still occurrences of the separator, create a substring from the start index up to but not including the separator index.
        const substring = str.substring(startIndex, endIndex);
        // Add the substring to the result array.
        result.push(substring);
        // Set the start index for the next substring to be the index immediately after the current separator index.
        startIndex = endIndex + separator.length;
        // Find the index of the next occurrence of the separator in the string.
        endIndex = str.indexOf(separator, startIndex);
      }
      // After all substrings have been added to the result array, add the final substring, which extends from the last separator index to the end of the string.
      result.push(str.substring(startIndex));
    }
  
    // Return the result array containing all the split substrings.
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
  