// isFriday function: returns true if the date is a Friday
function isFriday(date) {
    return date.getDay() === 5; // Friday is represented by the value 5 in JavaScript's getDay() method.
  }
  
  // isWeekend function: returns true if the date is a weekend day
  function isWeekend(date) {
    const dayOfWeek = date.getDay(); // getDay() returns the day of the week as an integer, starting from 0 (Sunday) to 6 (Saturday).
    return dayOfWeek === 0 || dayOfWeek === 6; // Weekend days are 0 (Sunday) and 6 (Saturday).
  }
  
  // isLeapYear function: returns true if the year of the date is a leap year
  function isLeapYear(date) {
    const year = date.getFullYear(); // getFullYear() returns the year as a four-digit number (yyyy)
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); // A year is a leap year if it's divisible by 4 but not by 100, or if it's divisible by 400.
  }
  
  // isLastDayOfMonth function: returns true if the date represents the last day of the month
  function isLastDayOfMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const lastDayOfMonth = new Date(year, month + 1, 0); // The 0th day of the next month is the last day of the current month.
    return date.getTime() === lastDayOfMonth.getTime(); // getTime() returns the time value in milliseconds since the Unix Epoch (January 1, 1970), which can be used to compare two dates.
  }
  