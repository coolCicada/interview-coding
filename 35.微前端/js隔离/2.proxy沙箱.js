class ProxySandbox {
  constructor() {
    const rawWindow = window;
    const fakeWindow = {};
    const proxy = new Proxy(fakeWindow, {
      set(target, p, value) {
        target[p] = value;
        return true;
      },
      get(target, p) {
        return target[p] || rawWindow[p];
      }
    });
    this.proxy = proxy;
  }
}

const sandbox1 = new ProxySandbox();
const sandbox2 = new ProxySandbox();

window.a = 1;
window.obj = {
  i: 'init',
};
((window) => {
  window.a = 'hello';
  window.obj.i = 'one';
  console.log(window.a, window.obj.i);
})(sandbox1.proxy);

((window) => {
  window.a = 'world';
  console.log(window.a, window.obj.i);
})(sandbox2.proxy);