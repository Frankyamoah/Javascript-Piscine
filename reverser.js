function reverse(str){
    if (typeof str === 'string') {
        str = str.split('')
    }
    result = [];
    for (let i = str.length - 1; i >= 0; i--){
       result.push(str[i]);
    }
    return result;
}

