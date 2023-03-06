function reverse(str){
    result = ""
    if (typeof str === 'string') {
        str = str.split('')
    }
    for (let i = str.length - 1; i >= 0; i--){
       result.push(str[i]);
    }
    return result;
}

