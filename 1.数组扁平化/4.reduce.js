const arr = ['1', [2, [3, [4, 5]]], 6];

function dfs(arr) {
  return arr.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? dfs(curr) : curr);
  }, []);
}

console.log(dfs(arr));