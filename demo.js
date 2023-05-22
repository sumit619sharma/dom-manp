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
    list[i].style.backgroundColor="grey";
}

var list = document.getElementsByTagName('li')
console.log(list);
for(let i=0; i<list.length; i++){
    list[i].style.fontweight="bold";
    list[i].style.backgroundColor="greenyellow";
}