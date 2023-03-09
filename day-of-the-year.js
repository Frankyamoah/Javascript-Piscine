function dayOfTheYear(date) {
    // Create a new date object with the same year as the input date, but with a month and day of 1
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  
    // Calculate the difference in milliseconds between the input date and the first day of the year
    const timeDiff = date.getTime() - firstDayOfYear.getTime();
  
    // Calculate the number of days between the two dates by dividing the time difference by the number of milliseconds in a day
    const dayOfYear = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    // Return the day of the year
    return dayOfYear + 1; // Add 1 to account for the first day of the year being day 1
  }
  