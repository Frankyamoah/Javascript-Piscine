function pyramid(char, height) {
    let result = ''; // initialize an empty string to build the pyramid
    for (let i = 0; i < height; i++) { // loop through each row
      // add spaces to align the pyramid to the center
      for (let j = 0; j < height - i - 1; j++) {
        result += ' ';
      }
      // add characters to create the pyramid
      for (let k = 0; k < 2 * i + 1; k++) {
        result += char;
      }
      result += '\n'; // add a newline character after each row
    }
    return result.slice(0, result.length - 1); // return the final pyramid string
  }
  