if (global.window === undefined) {
  window = {};
}

Function.prototype.ownBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Type Error');
  }

  const self = this;

  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments]);
  }
}

function test(a, b, c) {
  let d = 0;
  if (this.d) d = this.d;
  return a + b + c + d;
}

const f = test.ownBind({ d: 100 }, 1, 2);
console.log(f(10));