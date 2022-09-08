window.addEventListener('scroll', function() {
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    // ..
  }
}, false);