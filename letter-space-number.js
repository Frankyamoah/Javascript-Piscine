/*Create a function named letterSpaceNumber that accepts a string; returning an array with every
 instance of a letter, followed by a space, followed by a number, only if that number has
  only one digit, and is not followed by any letter.*/

  function letterSpaceNumber(str) {
    const result = [];
    const letters = /^[A-Za-z]*$/;
    const numbers = /^[0-9]$/;

    for (let i = 0; i <= str.length - 3; i++) {
      if (letters.test(str.charAt(i)) &&
          str.charAt(i + 1) === ' ' &&
          numbers.test(str.charAt(i + 2)) &&
          !/[A-Za-z]/.test(str.substring(i + 3, i + 4)) &&
          !/\d/.test(str.charAt(i + 3))) {
        result.push(str.charAt(i) + str.charAt(i + 1) + str.charAt(i + 2));
      }
    }

    return result;
  }