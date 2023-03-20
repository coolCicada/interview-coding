function deepCopy(target, m = new WeakMap()) {
  if (typeof target === 'object' && target != null) {
    if (m.has(target)) return m.get(target);

    const newTarget = Array.isArray(target) ? [] : Object.create(null);
    for (const key in target) {
      newTarget[key] = deepCopy(target[key], m);
    }
    m.set(target, newTarget);
    return newTarget;
  } else {
    return target;
  }
}
const p = {
  c: 2
}
const obj = {
  a: 1,
  b: p,
  d: p,
}

console.log(obj)
obj.b.c = 3
console.log(obj)

const newObj = deepCopy(obj);

console.log(newObj)
newObj.b.c = 4
console.log(newObj)