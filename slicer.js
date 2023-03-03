function slice(input, start, end) {
    let output = typeof input === 'string' ? '' : [];
  
    if (!end) {
      end = input.length;
    }
  
    if (start < 0) {
      start += input.length;
    }
  
    if (end < 0) {
      end += input.length;
    }
  
    if (start >= end) {
      return output;
    }
  
    for (let i = start; i < end; i++) {
      output.push ? output.push(input[i]) : (output += input[i]);
    }
  
    return output;
  }
  