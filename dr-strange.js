/* You will create two functions: addWeek and timeTravel.
You have been given a mission to create a new sense of time. Normally a week has 7 days right? Well, that is about to change.
Weeks will instead have 14 days.
Let me explain; this new week will have 14 days, from Monday to Sunday, then secondMonday to secondSunday.
Your purpose is to create a new function named addWeek, that takes a Date as an argument. Your function should return the weekday as a string, according to our new 14-day week format. The epoch of our new 14-day week is 0001-01-01, and that was a Monday. */

function addWeek(date){
// Calculate milliseconds between date given and epoch of the new 14 day week
    const epoch = new Date('0001-01-01');
    const days = (date.getTime() - epoch .getTime()) / (1000 * 60 * 60 * 24); 

// Use module to determine which day of the 14 week it is
    const dayOfWeek = days % 14;

      // map the day of the week to a string
  let dayString;
  switch (dayOfWeek) {
    case 0:
      dayString = 'Monday';
      break;
    case 1:
      dayString = 'Tuesday';
      break;
    case 2:
      dayString = 'Wednesday';
      break;
    case 3:
      dayString = 'Thursday';
      break;
    case 4:
      dayString = 'Friday';
      break;
    case 5:
      dayString = 'Saturday';
      break;
    case 6:
      dayString = 'Sunday';
      break;
    case 7:
      dayString = 'secondMonday';
      break;
    case 8:
      dayString = 'secondTuesday';
      break;
    case 9:
      dayString = 'secondWednesday';
      break;
    case 10:
      dayString = 'secondThursday';
      break;
    case 11:
      dayString = 'secondFriday';
      break;
    case 12:
      dayString = 'secondSaturday';
      break;
    case 13:
      dayString = 'secondSunday';
      break;
  }

  return dayString;
}

function timeTravel({date, hour, minute, second}) {
    // create date object with the input time, use getTime method to extracct number of miliseconds
    const newDate = new Date(date.getTime);
    // We then use the set method to modify date into standard format
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    // use toString method to turn into legible format for reading
    return newDate.toString();
}
