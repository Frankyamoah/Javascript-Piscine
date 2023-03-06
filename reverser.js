function reverse(str){
    result = []
    for (let i = str.length - 1; i >= 0; i--){
       result.push(str[i]);
       if (str === 'string'){
        String.join(result)
       }
   }
    return result;
}

