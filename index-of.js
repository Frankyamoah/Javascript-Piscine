function indexOf(arr, val, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }

  function lastIndexOf(arr, val, startIndex = arr.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }

  function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  }
  