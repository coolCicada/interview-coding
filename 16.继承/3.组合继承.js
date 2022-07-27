// 核心思想：综合了原型链和构造函数，即，使用原型链继承原型上的方法，而通过构造函数继承实例属性
// 实现：
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

let instance1 = new SubType('instance1', 1);
instance1.sayName();
instance1.colors.push('blue');
console.log(instance1.colors);

let instance2 = new SubType('instance2', 2);
instance2.sayName();
console.log(instance2.colors);

// 问题：
// 父类构造函数始终会被调用两次 
  // 一次是在创建子类原型时 new SuperType() 调用
  // 另一次是在子类构造函数中SuperType.call调用
