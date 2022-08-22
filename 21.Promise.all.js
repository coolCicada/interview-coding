function myAll(promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then(res => {
          ans[i] = res;
          index += 1;
          if (index === promiseArr.length) resolve(ans);
        }).catch(err => reject(err));
    }
  });
}

myAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})