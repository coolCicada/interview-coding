const arr = ['1', [2, [3, [4, 5]]], 6];
// 1.先将中括号去掉
const replaceStr = JSON.stringify(arr).replace(/\[|\]/g, '');
// 2.添加最外层的中括号，反序列化
console.log(JSON.parse('[' + replaceStr + ']'));