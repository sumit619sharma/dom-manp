let sub = document.querySelector(".submit");
sub.addEventListener("click", (e) => {
    e.preventDefault();
 
     // store detail to local-storage******************
    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
   // console.log(`${fstname.value} ${email.value}` );
    var details = {
        name: fstname.value,
        email: email.value
    }
    
    
    localStorage.setItem( email.value, JSON.stringify(details))
   
    email.textContent="";
    fstname.textContent="";
    allUser(email.value);
});

const allUser = (key)=>{
    
    // var len = localStorage.length;
    // for(let i=0; i<len; i++){
    //     let key = localStorage.key(i);
    //     let value =JSON.parse(localStorage.getItem(key));
    //   let parent = document.getElementById('container');
    //     let divTag = document.createElement('div');
    // let textNode = document.createTextNode(value.name+" "+value.email);
    // divTag.appendChild(textNode);
    // parent.appendChild(divTag);
    // }
    
   let  obj =JSON.parse(localStorage.getItem(key));
    let parent = document.getElementById('container');
    let divTag = document.createElement('div');
let textNode = document.createTextNode(obj.name+" "+obj.email);

var button = document.createElement('input');

// Set the attributes
button.setAttribute('type', 'button');
button.setAttribute('value', 'Delete');
button.setAttribute('onclick',`removeUser(event,'${key}')`);

divTag.appendChild(textNode);
divTag.appendChild(button)
parent.appendChild(divTag);

}

const removeUser=(e,key)=>{
    // delete from ui;
    console.log("innnnnnnnnnnnnnnnnnnn",key)
    //console.log("eleemnt",e.target.parentNode)
    let child = e.target.parentNode;
    let parent = e.target.parentNode.parentNode;
    console.log("child",child);
    console.log("aprent",parent);
    parent.removeChild(child);

    // remove from local storage
    localStorage.removeItem(key);
    
}

// sub.addEventListener("mouseover", (e) => {
//     e.preventDefault();

//     let fstname = document.querySelector("#name");
//     let email = document.querySelector("#email");
//     console.log(`${fstname.value} ${email}` );
//     fstname.innerHTML='<h1>hello</h1>';
    
// });


// sub.addEventListener("mouseout", (e) => {
//     e.preventDefault();

//     let fstname = document.querySelector("#name");
//     let email = document.querySelector("#email");
//     console.log(`${fstname.value} ${email}` );
//     fstname.innerHTML='<h1>hello</h1>';
    
// });
