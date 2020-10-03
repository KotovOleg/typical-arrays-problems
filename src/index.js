
exports.min = function min (array) { 
    if(array === undefined || array.length === 0) {
        return 0
    }
    let minArray = array[0];
    for(let i = 0; i < array.length; i++) {
      if (minArray > array[i]) {
        minArray = array[i]
      }
    }
  return minArray;
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0
    }
    let maxArray = array[0];
    for(let i = 0; i < array.length; i++) {
        if (maxArray < array[i]) {
            maxArray = array[i]
        }
    }
    return maxArray;
}

exports.avg = function avg (array) {
    let sum = 0;
    if(array === undefined || !array.length) {
        return sum
    }
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
  return sum / array.length;
}

