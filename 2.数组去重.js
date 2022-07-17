const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// 方法一: 利用set
const res1 = Array.from(new Set(arr));
console.log(res1);
// 方法二： 两层for循环 + splice
const unique = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
console.log(unique(arr));
// 方法三： 利用indexOf
const unique2 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i] === -1)) res.push(arr[i]);
  }
  return res;
}
console.log(unique2(arr));
// 方法四：利用include
const unique3 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}
console.log(unique3(arr));
// 方法五：利用filter
const unique4 = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
}
console.log(unique4(arr));
// 方法六：利用Map
const unique5 = arr => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(unique5(arr));