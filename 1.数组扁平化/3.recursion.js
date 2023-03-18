const arr = ['1', [2, [3, [4, 5]]], 6];

const res = [];

function dfs(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      dfs(item);
    } else{
      res.push(item);
    }
  });
}

dfs(arr);

console.log(res);
