// 1 原型继承
// 核心思想： 子类的原型成为父类的实例
// 实现：

function SuperType() {
  this.colors = ['red', 'green'];
}

function SubType() {}

SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push('blue');

let instance2 = new SubType();
console.log(instance2.colors);

// 问题：
// 1.原型中包含的引用类型属性将被所有实例对象共享
// 2.子类在实例化时不能给父类构造函数传参
