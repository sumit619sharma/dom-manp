document.getElementById('main-header').style.borderBottom = 'solid 3px black'
document.getElementsByClassName('title')[0].style.color = 'green';
document.getElementsByClassName('title')[0].style.fontweight = 'bold';
document.getElementsByClassName('title')[1].style.color = 'red';
document.getElementsByClassName('title')[1].style.fontSize='50px';


document.getElementsByClassName('list-group-item')[2].style.color="green";
var list = document.getElementsByClassName('list-group-item')
console.log(list);
for(let i=0; i<list.length; i++){
    list[i].style.fontweight="bold";
    
}

var list = document.getElementsByTagName('li')

for(let i=0; i<list.length; i++){
    list[i].style.fontweight="bold";
    
}
document.querySelectorAll('li')[1].style.backgroundColor="green";
document.querySelectorAll('li')[2].style.display="none";
document.querySelectorAll('li')[1].style.color="red";
var odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd,"odd-element");
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor="greenyellow"
}