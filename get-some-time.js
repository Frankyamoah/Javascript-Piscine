function firstDayWeek(weekNumber, year) {
    const date = new Date(year);
    const dayOfWeek = date.getDay();
    const diff = 1 - dayOfWeek;
    const januaryFirst = new Date(year, 0, 1);
    const firstMonday = new Date(januaryFirst.setDate(januaryFirst.getDate() + diff));
    const daysToAdd = (weekNumber - 1) * 7;
    const result = new Date(firstMonday.setDate(firstMonday.getDate() + daysToAdd));
    const dd = String(result.getDate()).padStart(2, '0');
    const mm = String(result.getMonth() + 1).padStart(2, '0');
    const yyyy = result.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }
  