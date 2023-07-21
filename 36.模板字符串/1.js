const obj = {
  name: 'fatfish',
  age: 100,
  job: {
    name: 'front end development'
  }
};
const template = 'My name is {{name}}, age {{age}}, I am a {{job.name}}'

const r = template.replace(/{{([^}]+)}}/g, function(a, b, c) {
  const arr = b.split('.');
  let curr = obj;
  arr.forEach((item) => {
    curr = curr[item]
  })
  return curr;
})

console.log(r)

