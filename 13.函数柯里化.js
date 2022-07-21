function curry(fn) {
  let judge = (...args) => {
    if (args.length === fn.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  }
  return judge;
}

function add(a, b, c, d) {
  return a + b + c + d;
}

const addC = curry(add);
console.log(addC(1)(2)(3)(4));
console.log(addC(1, 2, 3)(4));