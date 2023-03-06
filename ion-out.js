function ionOut(str) {
    const words = str.split(' ');
    const result = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const index = word.indexOf('ion');
      if (index > 0 && word[index - 1] === 't') {
        result.push(word.substring(0, index ));
      }
    }
  
    return result;
  }