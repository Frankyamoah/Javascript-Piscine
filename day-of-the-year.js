/*
function dayOfTheYear(date) {
  // Extract the year, month and day of the input date
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Create a new Date object with the same year but the first day of that year (January 1)
  const firstDayOfYear = new Date(year, 0, 1);

  // Calculate the difference between the input date and the first day of the year in milliseconds
  const diffMs = date - firstDayOfYear;

  // Convert the difference from milliseconds to days and round down
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Return the number of days since the first day of the year
  return diffDays + 1;
}
*/
function dayOfTheYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st
  const diffInMilliseconds = date - startOfYear;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diffInMilliseconds / millisecondsPerDay);
  if (date.getFullYear() === 1 && date.getMonth() === 0 && date.getDate() === 1) {
    return 1;
  }
  return dayOfYear + 1; // Add 1 to account for January 1st
}
