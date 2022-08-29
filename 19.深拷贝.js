const cloneDeep = (target, hash = new WeakMap()) => {
  if (typeof target !== 'object' || target === null) return target;
  if (hash.has(target)) return hash.get(target);
  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);

  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    })
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] = cloneDeep(target[i], hash);
    }
  }

  return cloneTarget;
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;
const result1 = cloneDeep(target);
console.log(result1)