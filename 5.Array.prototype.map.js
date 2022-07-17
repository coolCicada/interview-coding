Array.prototype.ownMap = function (callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const res = [];
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      res[i] = callback.call(thisArg, O[i], i, this);
    }
  }
  return res;
}

const arr  = [1, 2, 3, 4, 5];
console.log(arr.map(item => item * 2));
console.log(arr.ownMap(item => item * 2));