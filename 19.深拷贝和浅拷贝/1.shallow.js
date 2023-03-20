const pre ={
  name:'张三',
  age:8,
  pal:['王五','王六','王七']
}

const n = shallowCoyp(pre);

function shallowCoyp(pre) {
  const newObj = {};
  for (const prop in pre) {
    if (pre.hasOwnProperty(prop)) newObj[prop] = pre[prop];
  }
  return newObj;
}

n.name = 'changeName';
n.pal[0] = 'changeIndex0';

console.log('pre:', pre);
console.log('n:', n);

