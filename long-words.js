function longWords(strArr){

    const long = strArr.every(function(str) {
        return typeof str === 'string' && str.length >= 5;
      });
      return long
}

function oneLongWord(strArr){

    const oneLong = strArr.some(function(str){
        return typeof str === 'string' && str.length >= 10;
    })
    return oneLong
}
function noLongWords(strArr){

   const noLong = strArr.every(function(str){
        return typeof str === 'string' && str.length < 7
   })
   return noLong
}