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
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0]  ;

  while (nextNode) {     
    node = nextNode     
    nextNode = node.children[0]   
  }   
   
  return node ;
}

//separate from solution above
 //function helperFunction(element) {     if (element.children.length > 0) {     return helperFunction(element.children[0])   } else {     return element   } }  function deepestChild() {   let element = document.querySelector('#grand-node')   return helperFunction(element) } 
