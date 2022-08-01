function myRace(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      Promise.resolve(p).then(
        val => resolve(val),
        err => reject(err),
      )
    })
  });
}

myRace([
  Promise.resolve(100),
  Promise.reject(99),
]).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err:', err);
})

Promise.race([
  Promise.resolve(100),
  Promise.reject(99),
]).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err:', err);
})