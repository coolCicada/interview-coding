const obj = {
  b: 123,
  c: '456',
  e: '789',
  x: {
    f: '服了'
  }
};
const str='a{a.b}aa{a.c}aa {a.d}aa- {a.x.f} -aa';

let index = 0;
function transfer(str, obj) {
  const res = [];
  let match = false;
  while (index < str.length) {
    if (!match) {
      str[index] === '{' ? match = true : res.push(str[index]);
      index++;
    } else {
      match = false;
      let myStr = '';
      while (str[index] !== '}') {
        myStr += str[index];
        index++;
      }
      index++;
      const arr = myStr.split('.');
      let o = obj;
      let flag = true;
      for (let i = 1; i < arr.length; i++) {
        if (o !== null && o !== undefined) {
          o = o[arr[i]];
        } else {
          flag = false;
          break;
        }
      }
      if (flag) res.push(o);
      else res.push('{' + myStr + '}');
    }
  }
  return res.join('');
}

console.log(transfer(str, obj));
