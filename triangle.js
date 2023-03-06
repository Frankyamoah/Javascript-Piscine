/* Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height. */

function triangle(char, height) {
    let result = ''; // initialize an empty string to build the triangle
    for (let i = 0; i < height; i++) { // loop through each row
      for (let j = 0; j <= i; j++) { // loop through each column in the row
        result += char; // append the character to the result string
      }
      result += '\n'; // add a newline character after each row
    }
    return result += '\n'; // return the final triangle string
  }
  