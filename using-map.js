function citiesOnly(ObjArr){
   const cities = ObjArr.map(ObjArr => ObjArr.city)
   return cities
}

function upperCasingStates(words){
 const upperCasingStates = words.map(word => { // create new array using map method
    const wordsArray = word.split(' '); // split words of mapArray by space delimiter
// create new mapArray that iterates over each letter, split the first word and use toupper, apply tolower to rest of word
    const capitalWordsAray = wordsArray.map(w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowercase());
    return capitalWordsAray.join(' '); // rejoin word and return it into the word mapArray
 });
 return upperCasingStates; // return the entire new string array
}

function fahrenheitToCelsius(tempsFahrenheit) {
    return tempsFahrenheit.map(tempF => {
      const tempC = (parseFloat(tempF) - 32) * 5 / 9;
      return `${Math.floor(tempC)}°C`;
    });
  }

  function trimTemp(arr) {
    const result = arr.map(obj => {
      const trimmedTemp = obj.temperature.trim();
      return { city: obj.city, temperature: trimmedTemp };
    });
    return result;
  }
  
  function tempForecasts(data) {
    return data.map((item) => {
      // Extract values from the object
      const { city, temperature, state } = item;
  
      // Convert temperature from Fahrenheit to Celsius and round down
      const celsius = Math.floor((parseInt(temperature) - 32) * (5 / 9));
  
      // Return formatted string using template literals
      return `${celsius}°Celsius in ${city}, ${state.charAt(0).toUpperCase()}${state.slice(1)}`;
    });
  }
  
  
  