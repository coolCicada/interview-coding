Array.prototype.ownForEach = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
}

const arr = [1, 2, 3, 4];
arr.ownForEach(function(item) {
  console.log(item);
})