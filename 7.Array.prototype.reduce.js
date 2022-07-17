Array.prototype.ownReduce = function(callback, initialValue) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const O = Object(this);
  const len = this.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k++;
    }
    if (k >= len) {
      throw new TypeError('Reduce of empty arr with no initial value');
    }
    accumulator = O[k++];
  }
  while (k < len) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    k++;
  }
  return accumulator;
}

const res = [];
function fn(init, curr) {
  return init + curr;
}
const r = res.ownReduce(fn)
console.log(r);

const r2 = res.reduce(fn);
console.log(r2);