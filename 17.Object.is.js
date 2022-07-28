// Object.is 解决的主要是这两个问题：
// +0 === -0 // true
// NaN === NaN // false

const is = (x, y) => {
  if (x === y) {
    // +0 和 -0 应该不相等
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // NaN 等于 NaN
    return x !== x && y !== y;
  }
}