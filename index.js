function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //return document.querySelector(#nested .target);
  //find #nested
  //then find .target
  console.log(document.querySelector('#nested .target'));
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  let node = document.querySelectorAll('div#grand-node');
  let nextNode = document.querySelector('div#grand-node');
  //console.log(node.innerHTML);
  //console.log(typeof node);
  //console.log(nextNode.innerHTML);
  //console.log(typeof nextNode);
  for (let i = 0; i < node.length; i++) {
    console.log(node.length);
    console.log(node[i].innerHTML);
    testArray = Array.from(node);
  }
  //return node;
}
