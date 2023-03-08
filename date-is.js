function isValid(date) {

    if (date === ''){
        return false
    }else {
        return !isNaN(date);
    }
  }

 
  function isAfter(date1, date2) {

    const newDate1 = new Date(date1)
    const newDate2 = new Date(date2)
    return newDate1.getTime() > newDate2.getTime();
  }


  function isBefore(date1, date2) {

    const newDate1 = new Date(date1)
    const newDate2 = new Date(date2)
    return newDate2.getTime() > newDate1.getTime();
  }


  function isFuture(date) {
    const newdate = new Date(date)
    return isValid(date) && date.getTime() > Date.now();
  }


  function isPast(date) {
    const newdate = new Date(date)
    return isValid(date) && date.getTime() < Date.now();
  }