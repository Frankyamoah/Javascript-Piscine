function firstDayWeek(week, year) {
    const firstDayOfYear = new Date(year, 0, 1); // January 1st of the year
    const firstDay = new Date(firstDayOfYear.getTime()); // create a copy of the first day of the year
  
    // find the first Monday of the year
    while (firstDay.getDay() !== 1) {
      firstDay.setDate(firstDay.getDate() + 1);
    }
  
    // calculate the number of days to add to the first Monday to get to the first day of the given week
    const daysToAdd = (week - 1) * 7;
  
    // add the days to the first Monday to get to the first day of the given week
    firstDay.setDate(firstDay.getDate() + daysToAdd);
  
    // if the resulting date is in a previous year, return the first day of the year instead
    if (firstDay.getFullYear() < year) {
      return `01-01-${year}`;
    }
  
    // format the resulting date to the desired format
    const day = firstDay.getDate().toString().padStart(2, '0');
    const month = (firstDay.getMonth() + 1).toString().padStart(2, '0');
    const formattedYear = firstDay.getFullYear().toString();
  
    return `${day}-${month}-${formattedYear}`;
  }
  