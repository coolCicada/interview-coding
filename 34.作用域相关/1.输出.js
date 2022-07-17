'use strict';
var length = 10;

function fn() {
  return this.length + 1;
}

var obj = {
  length: 5,
  test1: function() {
    return fn();
  }
}

obj.test2 = fn;

console.log(obj.test1.call()); // 11 非严格模式
console.log(obj.test1()); // 11 非严格模式
console.log(obj.test2.call()); // 11 非严格模式
console.log(obj.test2()); // 6

// 可选的。
// 在 function 函数运行时使用的 this 值。
// 请注意，this可能不是该方法看到的实际值：
// 如果这个函数处于非严格模式下，
// 则指定为 null 或 undefined 时会自动替换为指向全局对象
// ，原始值会被包装。