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
