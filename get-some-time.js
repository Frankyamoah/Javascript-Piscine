function firstDayWeek(week, year) {
    const date = new Date(year);
    const day = date.getDay();
    
    // Calculate the date for the first day of the year
    const firstDayOfYear = new Date(year);
    firstDayOfYear.setDate(1);
    firstDayOfYear.setMonth(0);
    
    // Adjust the date for the first day of the first week
    const daysToMonday = 1 - day;
    const firstDayOfFirstWeek = new Date(firstDayOfYear);
    firstDayOfFirstWeek.setDate(firstDayOfYear.getDate() + daysToMonday);
  
    // Calculate the date for the first day of the given week
    const daysToFirstDayOfWeek = (week - 1) * 7;
    const firstDayOfWeek = new Date(firstDayOfFirstWeek);
    firstDayOfWeek.setDate(firstDayOfFirstWeek.getDate() + daysToFirstDayOfWeek);
  
    const dd = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const mm = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
    const yyyy = String(firstDayOfWeek.getFullYear());
    
    return `${dd}-${mm}-${yyyy}`;
  }
  