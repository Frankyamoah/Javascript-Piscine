function firstDayWeek(week, year) {
    const jan1 = new Date(`${year}-01-01`);
    const dayOfWeekJan1 = jan1.getDay();
    const daysBeforeFirstMonday = dayOfWeekJan1 === 0 ? 6 : dayOfWeekJan1 - 1;
    const daysInFirstWeek = 7 - daysBeforeFirstMonday;
    const firstDayOfYear = new Date(`${year}-01-01`);
  
    let weekStartDate;
    if (daysInFirstWeek >= 4) {
      weekStartDate = new Date(firstDayOfYear.setDate(1 + daysInFirstWeek));
    } else {
      weekStartDate = new Date(firstDayOfYear.setDate(8 - daysInFirstWeek));
    }
  
    const weekStartYear = weekStartDate.getFullYear();
    if (week === 1 && weekStartYear !== parseInt(year)) {
      weekStartDate = new Date(`${year}-01-01`);
    } else if (weekStartYear !== parseInt(year)) {
      weekStartDate = new Date(`${year}-01-01`);
      weekStartDate.setDate(weekStartDate.getDate() + (daysBeforeFirstMonday + 7 * (week - 2)));
    } else {
      weekStartDate.setDate(weekStartDate.getDate() + 7 * (week - 1));
    }
  
    const day = weekStartDate.getDate();
    const month = weekStartDate.getMonth() + 1;
    const yearFormatted = weekStartDate.getFullYear();
    const dayFormatted = day < 10 ? `0${day}` : day;
    const monthFormatted = month < 10 ? `0${month}` : month;
  
    return `${dayFormatted}-${monthFormatted}-${yearFormatted}`;
  }
  