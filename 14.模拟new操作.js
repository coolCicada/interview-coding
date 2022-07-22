function newOperator(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('Type Error');
  }
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);

  const isObj = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  return isObj || isFunction ? res : obj;
}

function one() {
  this.a = 1;
  this.b = 2;
  return {
    c: 'c'
  }
}
const r = newOperator(one);
console.log(r);

function two() {
  this.a = 1;
  this.b = 2;
}
const r2 = newOperator(two);
console.log(r2);