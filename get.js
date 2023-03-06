/*Create a function named get which takes two arguments:

src: an object.
path: a string representing a path.
Your function will return the value at the given path in the src object. */

function get(src, path) {
    // Split the path string into an array of property names
    const props = path.split('.');
    
    // Starting from the source object, loop through each property name in the path
    let currentObj = src;
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      
      // If the current object doesn't have the property, return undefined
      if (!currentObj.hasOwnProperty(prop)) {
        return undefined;
      }
      
      // Otherwise, update the current object to the value of the current property
      currentObj = currentObj[prop];
    }
    
    // After looping through all properties in the path, return the final value
    return currentObj;
  }
  