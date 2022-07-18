if (global.window === undefined) {
  window = {};
}

Function.prototype.ownCall = function(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
}

function add(d) {
  this.a = this.b + this.c + d
  return this.a;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

add.ownCall(obj, 10);

console.log(obj);

