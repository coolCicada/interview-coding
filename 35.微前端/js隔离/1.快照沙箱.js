const iter = (window, callback) => {
  for (const prop in window) {
    if (window.hasOwnProperty(prop)) {
      callback(prop);
    }
  }
}

class SnapshotSandbox {
  constructor() {
    this.proxy = window;
    this.modifyPropsMap = {};
  }
  // 激活沙箱
  active() {
    // 缓存 active 状态的 window
    this.windowSnapshot = {};
    iter(window, (prop) => {
      this.windowSnapshot[prop] = window[prop];
    });
    Object.keys(this.modifyPropsMap).forEach(p => {
      window[p] = this.modifyPropsMap[p];
    });
  }

  inactive() {
    iter(window, (prop) => {
      if (this.windowSnapshot[prop] !== window[prop]) {
        // 记录变更
        this.modifyPropsMap[prop] = window[prop];
        // 还原 window
        window[prop] = this.windowSnapshot[prop];
      }
    })
  }
}

const sandbox = new SnapshotSandbox();
window.sex = '中';
window.age = '33';
window.obj = {
  i: 'init'
};
((window) => {
  // 激活沙箱
  sandbox.active();
  window.sex= '男';
  window.age = '22';
  window.obj.a = 2;
  console.log(window.sex, window.age, window.obj);
  // 退出沙箱
  sandbox.inactive();
  console.log(window.sex, window.age, window.obj);
  // 激活沙箱
  sandbox.active();
  console.log(window.sex, window.age, window.obj);
})(sandbox.proxy);