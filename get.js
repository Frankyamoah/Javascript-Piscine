/*Create a function named get which takes two arguments:

src: an object.
path: a string representing a path.
Your function will return the value at the given path in the src object. */

  
  function get(src, path){
    const keys = path.split('.'); //split path into keys
    let value = src;
    for (const key of keys) {
        value = value[key]; //traverse nested protperties
        if (value === undefined) {
            return undefined; //stop if a key is missing
        }
    }
    return value;
}