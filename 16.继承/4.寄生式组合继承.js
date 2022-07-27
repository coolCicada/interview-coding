// 核心思想：通过构造函数继承属性，但使用混合式原型继承方法，即，不通过调用父类构造函数给子类原型赋值，
// 而是取得父类原型的一个副本
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

SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;
