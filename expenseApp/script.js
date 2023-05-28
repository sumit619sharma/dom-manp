let sub = document.querySelector(".submit");
sub.addEventListener("click", (e) => {
    e.preventDefault();
 
     // store detail to local-storage******************
    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
    let cat = document.querySelector("#myDropdown");
   // console.log(`${fstname.value} ${email.value}` );
    var details = {
        name: fstname.value,
        email: email.value,
        cat: cat.value,
    }
    
    
    
    localStorage.setItem( email.value, JSON.stringify(details))
    allUser(email,fstname,cat);

//     email.value=""
//    fstname.value=""
});

const allUser = (key,fstname,cat)=>{
    
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
    console.log("category===",cat.value);
   let  obj =JSON.parse(localStorage.getItem(key.value));
    let parent = document.getElementById('dynamic');
    let divTag = document.createElement('div');
let textNode = document.createTextNode(obj.name+"--"+obj.email+"--"+obj.cat);

var button = document.createElement('input');

// Set the attributes for delete
button.setAttribute('type', 'button');
button.setAttribute('value', 'Delete');
button.setAttribute('onclick',`removeUser(event,'${key.value}')`);

var edit = document.createElement('input');
// Set the attributes for Edit
edit.setAttribute('type', 'button');
edit.setAttribute('value', 'Edit');
edit.setAttribute('onclick',`editUser(event,'${key.value}','${fstname.value}','${cat.value}')`);


divTag.appendChild(textNode);
divTag.appendChild(button)
divTag.appendChild(edit)
parent.appendChild(divTag);
key.value="";
fstname.value="";
cat.value="movies";

}

const removeUser=(e,key)=>{
    // delete from ui;
    
    //console.log("eleemnt",e.target.parentNode)
    let child = e.target.parentNode;
    let parent = e.target.parentNode.parentNode;
    // console.log("child",child);
    // console.log("aprent",parent);
    parent.removeChild(child);

    // remove from local storage
    localStorage.removeItem(key);
    
}

const editUser=(e,key,name,cat)=>{
    removeUser(e,key);
    
    console.log("category===",cat);
     document.querySelector("#name").value=name;
     document.querySelector("#email").value = key;
    document.querySelector("#myDropdown").value = cat ;
}


