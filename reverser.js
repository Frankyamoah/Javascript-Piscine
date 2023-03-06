function reverse(str){
    if (str === 'string') {
        str = str.split('')
    }
    result = [];
    for (let i = str.length - 1; i >= 0; i--){
       result.push(str[i]);
    }
    return result;
}

console.log(reverse("[1, 2, 3]), [3, 2, 1]"))


