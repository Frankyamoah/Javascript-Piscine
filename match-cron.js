function matchCron(cron, date) {
    const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ');
  
    // Check if the minute matches
    if (minute !== '*' && Number(minute) !== date.getMinutes()) {
      return false;
    }
  
    // Check if the hour matches
    if (hour !== '*' && Number(hour) !== date.getHours()) {
      return false;
    }
  
    // Check if the day of the month matches
    if (dayOfMonth !== '*' && Number(dayOfMonth) !== date.getDate()) {
      return false;
    }
  
    // Check if the month matches
    if (month !== '*' && Number(month) !== date.getMonth() + 1) {
      return false;
    }
  
    // Check if the day of the week matches
    if (dayOfWeek !== '*' && Number(dayOfWeek) !== date.getDay()) {
      return false;
    }
  
    // If all checks pass, return true
    return true;
  }
  