function citiesOnly(ObjArr){
   const cities = ObjArr.map(ObjArr => ObjArr.city)
   return cities
}

function upperCasingStates(states) {
    return states.map(state => {
      // convert each state to lowercase and split by space
      const stateArray = state.toLowerCase().split(' ');
      // capitalize the first letter of each word in the state name
      const capitalizedStateArray = stateArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      // join the words back together and return the capitalized state name
      return capitalizedStateArray.join(' ');
    });
  }
  
function fahrenheitToCelsius(tempsFahrenheit) {
    return tempsFahrenheit.map(tempF => {
      const tempC = (parseFloat(tempF) - 32) * 5 / 9;
      return `${Math.floor(tempC)}°C`;
    });
  }
  function trimTemp(states) {
    return states.map((state) => {
      const temperature = state.temperature.trim();
      const unit = temperature.endsWith('°F') ? '°F' : '°Celsius';
      const trimmedTemp = temperature.slice(0, -2);
      return { ...state, temperature: `${trimmedTemp}${unit}` };
    });
  }
  nction tempForecasts(data) {
    return data.map((item) => {
      // Extract values from the object
      const { city, temperature, state } = item;
  
      // Convert temperature from Fahrenheit to Celsius and round down
      const celsius = Math.floor((parseInt(temperature) - 32) * (5 / 9));
  
      // Return formatted string using template literals
      return `${celsius}°Celsius in ${city}, ${state.charAt(0).toUpperCase()}${state.slice(1)}`;
    });
  }
  
  
  