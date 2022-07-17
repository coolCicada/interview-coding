Array.prototype.ownFilter = function (callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this is null undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      if (callback.call(thisArg, O[i], i, O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].ownFilter(function(item) {
  return item % 2 === 0;
}, { name: 'ls' }));

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function(item) {
  return item % 2 === 0;
}, { name: 'ls' }));