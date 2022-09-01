function _render(vnode) {
  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}

let vnode = {
  tag: "DIV",
  attrs: {
      id: "app",
  },
  children: [
    "text",
    100,
    {
        tag: "SPAN",
        children: [
            {
                tag: "A",
                children: [],
            },
        ],
    },
    'over',
  ],
};

console.log(_render(vnode));