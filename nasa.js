/* Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

Convert numbers which are divisible by 3 to "NA".
Convert numbers which are divisible by 5 to "SA".
Convert numbers which are divisible by 3 and 5 to "NASA". */

function nasa(N) {
    // Create an empty string to store the output
    let output = "";
  
    // Loop from 1 to N
    for (let i = 1; i <= N; i++) {
      // If the number is divisible by 3 and 5, add "NASA" to the output
      if (i % 3 === 0 && i % 5 === 0) {
        output += "NASA ";
      } 
      // If the number is divisible by 3, add "NA" to the output
      else if (i % 3 === 0) {
        output += "NA ";
      } 
      // If the number is divisible by 5, add "SA" to the output
      else if (i % 5 === 0) {
        output += "SA ";
      } 
      // Otherwise, add the number to the output
      else {
        output += i + " ";
      }
    }
  
    // Return the final output string with all numbers and exceptions
    return output.trim();
  }
  