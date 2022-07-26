// 核心思想：在子类构造函数中调用父类构造函数
// 实现：
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green'];
  this.getName = function() {
    return this.name;
  }
}

function SubType(name) {
  SuperType.call(this, name);
}

let instance1 = new SubType('instance1');
instance1.colors.push('blue');
console.log(instance1.colors);

let instance2 = new SubType('instance2');
console.log(instance2.colors);

// 问题：
// 1）由于方法必须在构造函数中定义，因此方法不能重用
// 2）子类也不能访问父类原型上定义的方法
