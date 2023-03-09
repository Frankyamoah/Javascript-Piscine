/**
 * Returns the number of days since the first day of the year.
 * @param {Date} date - The input date.
 * @returns {number} The number of days since the first day of the year.
 */
function dayOfTheYear(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
    const diff = date.getTime() - firstDayOfYear.getTime(); // difference in milliseconds
    return Math.ceil(diff / oneDay) + 1; // add 1 to include the first day of the year
  }
  
  