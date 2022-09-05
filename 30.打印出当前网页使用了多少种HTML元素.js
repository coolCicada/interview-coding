const fn = () => {
  const arr = [...new Set([...document.querySelectorAll('*')].map(el => el.tagName))];
  console.log(arr);
  return arr.length;
}
console.log(fn());