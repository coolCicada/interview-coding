const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (proto !== right.prototype) {
    if (proto === null) return false;
    proto = Object.getPrototypeOf(proto);
  }
  return true;
}


function Test() {}
const obj = new Test();

function Test2() {}
console.log(myInstanceof(obj, Object));
console.log(myInstanceof(obj, Test));
console.log(myInstanceof(obj, Test2));