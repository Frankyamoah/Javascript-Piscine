
function dayOfTheYear(date) {
  // variable for the first day of the year
  const startOfYear = new Date(date.getFullYear(), 0, 1); 
  // subtracts the input date from the start of the year answer is in milliseconds
  const diffInMilliseconds = date - startOfYear; 
  // calculates milliseconds in a day 
  const millisecondsPerDay = 1000 * 60 * 60 * 24; 
  // subtracts differience between input date and ms in a day rounded down to the nearest number
  const dayOfYear = Math.floor(diffInMilliseconds / millisecondsPerDay); 
  // checks if input date is first of january returns 1 if so
  if (date.getFullYear() === 1 && date.getMonth() === 0 && date.getDate() === 1) {
    return 1;
  }
  return dayOfYear + 1; // Add 1 to account for January 1st
}
