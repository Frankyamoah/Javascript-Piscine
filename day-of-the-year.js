function dayOfTheYear(date) {
    // Get the start of the year by creating a new Date object with the same year as the input date, but with month and day set to 0.
    const startOfYear = new Date(date.getFullYear(), 0, 0);
  
    // Calculate the difference in milliseconds between the input date and January 1st.
    const diffMilliseconds = date - startOfYear;
  
    // Convert the difference to days by dividing by the number of milliseconds in a day.
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
  
    // Return the number of days since the first day of the year.
    return diffDays + 1; // Add 1 because we want to count the first day of the year as day 1.
  }
  