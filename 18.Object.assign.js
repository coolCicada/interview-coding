Object.ownAssign = function (target, ...source) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  let res = Object(target);
  source.forEach(function (obj) {
    if (obj != null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
}

const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3, d: 4 };
console.log(Object.ownAssign(a, b, c));
console.log(Object.assign(a, b, c));