function fold(arr, func, accumulator) {
    for (let i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
    }
    // The fold function receives an array, a function and an accumulator as parameters.
    // The function applies the function in the elements of the array starting on the left.
    
    function foldRight(arr, func, accumulator) {
    for (let i = arr.length - 1; i >= 0; i--) {
    accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
    }
    // The foldRight function receives an array, a function and an accumulator as parameters.
    // The function applies the function in the elements of the array starting on the right.
    
    function reduce(arr, func) {
    if (arr.length < 1) throw new Error("Reduce of empty array with no initial value");
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
    }
    // The reduce function receives an array and a function as parameters.
    // The function works just like the method [].reduce when you don't specify an accumulator.
    // The starting value of your accumulator must be the first value of the array.
    // If your array is less than 1 argument you should throw an error.
    
    function reduceRight(arr, func) {
    if (arr.length < 1) throw new Error("Reduce of empty array with no initial value");
    let accumulator = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
    accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
    }
    // The reduceRight function receives an array and a function as parameters.
    // The function works just like the method [].reduceRight.
    // The starting value of your accumulator must be the last value of the array.
    // If your array is less than 1 argument you should throw an error.