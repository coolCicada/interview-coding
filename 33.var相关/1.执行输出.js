// for (var i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 问题1：输出结果是什么？为什么？
// 6 6 6 6 6 6
// 问题2: 请改造成正确的输出

// for (var i = 0; i < 6; i++) {
//   setTimeout((i) => {
//     console.log(i);
//   }, 1000);
// }

// 问题3： 请改造成 1->2->3->4->5 每个输出都等待1s
// let pre = Promise.resolve();
// for (let i = 0; i < 6; i++) {
//   pre = pre.then(() => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log(i);
//         resolve();
//       }, 1000);
//     })
//   });
// }

// pre.then(() => {
//   console.log('over');
// })

function pro(i) {
  return new Promise((r) => {
    setTimeout(() => {
      r(i);
    }, 1000);
  })
}

async function doit() {
  for (let i = 0; i  < 6; i++) {
    const r = await pro(i);
    console.log(r);
  }
}

doit();