// isValid: accepts a Date, and returns false if the Date is invalid.
function isValid(date) {
    return !isNaN(date) && date !== ''; // returns true if the input date is valid, false otherwise
  }
  
  
  // isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
function isAfter(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      return false;
    }
    return date1.getTime() > date2.getTime(); // returns true if date1 is after date2, false otherwise
  }
  
  
  // isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
  function isBefore(date1, date2) {
    return date2.getTime() > date1.getTime(); // returns true if date2 is after date1, false otherwise
  }
  
  // isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
  function isFuture(date) {
    const now = new Date(); // get current date and time
    return isValid(date) && isAfter(date, now); // return true if date is valid and after now
  }
  
  // isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
  function isPast(date) {
    const now = new Date(); // get current date and time
    return isValid(date) && isBefore(date, now); // return true if date is valid and before now
  }
  