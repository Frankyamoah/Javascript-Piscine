function firstDayOfWeek(week, year) {
    // Ensure input values are valid
    if (!isValidWeek(week, year)) {
      return null;
    }
  
    // Determine the first day of the year
    const firstDayOfYear = new Date(year, 0, 1);
  
    // Determine the day of the week of the first day of the year
    const firstDayOfYearDayOfWeek = firstDayOfYear.getDay();
  
    // Determine the date of the first Monday of the year
    const firstMondayOfYearDate = new Date(
      year,
      0,
      1 + ((8 - firstDayOfYearDayOfWeek) % 7)
    );
  
    // Determine the date of the requested week's Monday
    const requestedMondayDate = new Date(
      firstMondayOfYearDate.getFullYear(),
      0,
      (week - 1) * 7 + 1
    );
  
    // Format the date as "dd-mm-yyyy"
    const day = requestedMondayDate.getDate().toString().padStart(2, '0');
    const month = (requestedMondayDate.getMonth() + 1).toString().padStart(2, '0');
    const yearString = requestedMondayDate.getFullYear().toString();
  
    return `${day}-${month}-${yearString}`;
  }
  
  function isValidWeek(week, year) {
    const numWeeks = getNumWeeks(year);
    return week >= 1 && week <= numWeeks;
  }
  
  function getNumWeeks(year) {
    // Determine the date of the last day of the year
    const lastDayOfYear = new Date(year, 11, 31);
  
    // Determine the day of the week of the last day of the year
    const lastDayOfYearDayOfWeek = lastDayOfYear.getDay();
  
    // Determine the date of the last Saturday of the year
    const lastSaturdayOfYearDate = new Date(
      year,
      11,
      31 - lastDayOfYearDayOfWeek
    );
  
    // Determine the week number of the last Saturday of the year
    const lastSaturdayOfYearWeek = getISOWeekNumber(lastSaturdayOfYearDate);
  
    // If the last Saturday is in the next year, we need to check the first week of the next year
    if (lastSaturdayOfYearWeek === 1) {
      return 52;
    }
  
    // Determine the week number of the first day of the year
    const firstDayOfYearWeek = getISOWeekNumber(new Date(year, 0, 1));
  
    // Calculate the number of weeks in the year
    return lastSaturdayOfYearWeek - firstDayOfYearWeek + 1;
  }
  
  function getISOWeekNumber(date) {
    // Copy date so don't modify original
    const newDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    newDate.setUTCDate(newDate.getUTCDate() + 4 - (newDate.getUTCDay() || 7));
  
    // Get first day of year
    const yearStart = new Date(Date.UTC(newDate.getUTCFullYear(), 0, 1));
  
    // Calculate full weeks to nearest Thursday
    const weekNum = Math.ceil((((newDate - yearStart) / 86400000) + 1) / 7);
  
    // Return week number
    return weekNum;
  }
  