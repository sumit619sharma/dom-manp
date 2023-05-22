// document.getElementById('main-header').style.borderBottom = 'solid 3px black'
// document.getElementsByClassName('title')[0].style.color = 'green';
// document.getElementsByClassName('title')[0].style.fontweight = 'bold';
// document.getElementsByClassName('title')[1].style.color = 'red';
// document.getElementsByClassName('title')[1].style.fontSize='50px';


// document.getElementsByClassName('list-group-item')[2].style.color="green";
// var list = document.getElementsByClassName('list-group-item')
// console.log(list);
// for(let i=0; i<list.length; i++){
//     list[i].style.fontweight="bold";
    
// }

// var list = document.getElementsByTagName('li')

// for(let i=0; i<list.length; i++){
//     list[i].style.fontweight="bold";
    
// }
// document.querySelectorAll('li')[1].style.backgroundColor="green";
// document.querySelectorAll('li')[2].style.display="none";
// document.querySelectorAll('li')[1].style.color="red";
// var odd = document.querySelectorAll('li:nth-child(odd)');
// console.log(odd,"odd-element");
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor="greenyellow"
// }


// parentElement
var list = document.querySelector('#items');
console.log(list.parentElement);
console.log(list.lastElementChild)
console.log(list.lastChild);
var divElement = document.createElement('div');
  
  console.log(divElement,"created");

  console.log(list.firstElementChild);
  console.log(list.firstChild);

  var nxtSib = list.firstElementChild.nextSibling;
  var nxtEleSib = list.firstElementChild.nextElementSibling;
console.log(nxtSib,"nxtsib");
console.log(nxtEleSib,"nxtEleSib");

console.log(nxtEleSib.previousSibling);
console.log(nxtEleSib.previousElementSibling);

divElement.setAttribute('title','setAttr');
console.log(divElement,"setAttrMethod");

  var text = document.createTextNode("text Created");
  divElement.appendChild(text);
  
  console.log(divElement,"text node append");

  let topCont=document.getElementsByClassName('container')[0];
 let btmCont =  document.getElementById('items');
let h1 = document.getElementById('header-title');
let h2 = document.querySelector('.list-group-item');

var divElement2 = document.createElement('div');
var text2 = document.createTextNode("Hello World2");
divElement2.appendChild(text2);
//console.log(h2,"*****************");
topCont.insertBefore(divElement,h1);
btmCont.insertBefore(divElement2,h2);

divElement.style.fontSize='50px'
divElement2.style.fontSize='30px';





