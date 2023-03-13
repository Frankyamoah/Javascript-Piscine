function filterShortStateName(arr) {
    return arr.filter(state => state.length < 7);
  }

function filterStartVowel(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(str => vowels.includes(str[0].toLowerCase()));
  }

function filter5Vowels(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(str => {
      const count = str.split('').reduce((acc, curr) => {
        if (vowels.includes(curr.toLowerCase())) {
          acc += 1;
        }
        return acc;
      }, 0);
      return count >= 5;
    });
  }
  function filter1DistinctVowel(strings) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return strings.filter(str => {
      const distinctVowels = str.toLowerCase().split('').filter(char => vowels.includes(char));
      return new Set(distinctVowels).size === 1;
    });
  }
  function multiFilter(objects) {
    return objects.filter(obj => {
      return obj.capital.length >= 8 &&
             !/^[aeiou]/i.test(obj.name) &&
             /[aeiou]/i.test(obj.tag) &&
             obj.region !== 'South';
    });
  }