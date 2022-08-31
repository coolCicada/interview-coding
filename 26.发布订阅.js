class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, callback) {
    if (this.cache[name]) {
      this.cache[name].push(callback);
    } else {
      this.cache[name] = [callback];
    }
  }

  off(name, callback) {
    if (this.cache[name]) {
      this.cache[name] = this.cache[name].filter(item => item !== callback);
    }
    if (this.cache[name].length === 0) delete this.cache[name];
  }

  once(name, callback) {
    const fn = () => {
      callback();
      this.off(name, fn);
    }
    this.on(name, fn);
  }

  emit(name, ...data) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      let tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...data);
      }
    }
  }
}

const event = new EventEmitter();
event.on('one', function() {
  console.log('one');
})
event.on('two', function() {
  console.log('two');
})
event.on('two', function() {
  console.log('two!!');
})
event.once('three', function() {
  console.log('three');
})
event.emit('one');
event.emit('one');
event.emit('two');
event.emit('three');
event.emit('three');
