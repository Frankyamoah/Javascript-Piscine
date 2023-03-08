function countLeapYears(date) {
    // Step 1: Get the year of the input date
    const year = date.getFullYear();
    
    // Step 2: Calculate the number of leap years from year 1 to the year of the input date
    const numYears = year - 1;
  
    // Step 3: Count the number of leap years
    let count = 0;
    for (let i = 1; i <= numYears; i++) {
      if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
        count++;
      }
    }
    
    return count;
  }
  