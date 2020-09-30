
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    var minimum = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i];
      }
    }
    return minimum;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    var maximum = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maximum) {
        maximum = array[i];
      }
    }
    return maximum;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    var average = 0;
    for (var i = 0; i < array.length; i++) {
      average += array[i];
    }
    return (average / array.length);
  } else {
    return 0;
  }
}
