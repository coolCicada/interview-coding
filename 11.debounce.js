// 1 刚开始不执行
const debounce = (fn, time) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  }
}

// 2 刚开始就执行
const debounce2 = (fn, time) => {
  let flag = true;
  let timeOut = null;
  return function() {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      flag = true;
    }, time);

    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    }
  }
}