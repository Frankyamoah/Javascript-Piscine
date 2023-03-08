function firstDayWeek(week, year) {
    const date = new Date(`${year}-01-01`);
    const day = date.getDay() || 7;
    
    if (day !== 1) {
      date.setHours(-24 * (day - 1));
    }
    
    date.setDate(date.getDate() + (week - 1) * 7);
    
    const yearOfWeek = date.getFullYear();
    const monthOfWeek = date.getMonth() + 1;
    const dayOfWeek = date.getDate();
    
    return `${dayOfWeek < 10 ? '0' : ''}${dayOfWeek}-${monthOfWeek < 10 ? '0' : ''}${monthOfWeek}-${yearOfWeek}`;
  }
  
  