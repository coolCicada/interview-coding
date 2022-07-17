// 1 Array.from
Array.from(document.querySelectorAll('div'));
// 2 Array.prototype.slice.call
Array.prototype.slice.call(document.querySelectorAll('div'));
// 3 拓展运算符
[...document.querySelectorAll('div')];
// 4 concat
Array.prototype.concat.apply([], document.querySelectorAll('div'));