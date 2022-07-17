const arr = [1, [2, [3, [4, 5]]], 6];
// 方法1：使用flat()
console.log(arr.flat(Infinity));
// 方法2：利用正则
console.log(JSON.stringify(arr).replace(/\[|\]/g,'').split(','));
// 方法3：正则改良版
console.log(JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'));
// 方法4: 使用reduce
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
const res4 = flatten(arr);
console.log(res4)
// 方法5： 函数递归
const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
}
fn(arr);
console.log(res5);