const throttle = (fn, time) => {
  let flag = true;
  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  }
}

const throttle2 = (fn, time) => {
  let flag = true;
  return function() {
    if (!flag) return;
    fn.apply(this, arguments);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, time);
  }
}