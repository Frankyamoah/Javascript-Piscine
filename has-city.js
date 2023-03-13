function hasCity(country, cities) {
    return function(city) { // returns a new function which takes a city as an argument
      if (cities.includes(city)) { // check if the array of cities includes the given city
        return `${city} is a city from ${country}`; // return string if city is found
      } else {
        return `${city} is not a city from ${country}`; // return string if city is not found
      }
    }
  }
  