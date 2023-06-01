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
    
    axios.post('https://crudcrud.com/api/09a163d56fee4a11b57fc22c5a3ddf23/personData'
    ,details)
    .then((resp)=>{
        console.log(resp.data);
        allUser(email,fstname,resp.data)
    }).catch((err)=>{
        console.log(err);
    })
   // localStorage.setItem( email.value, JSON.stringify(details))
    //allUser(email,fstname);

//     email.value=""
//    fstname.value=""
});

const allUser = (key,fstname,resp)=>{
    
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
    
   //let  obj =JSON.parse(localStorage.getItem(key.value));
   let  obj = resp; 
   let parent = document.getElementById('container');
    let divTag = document.createElement('div');
let textNode = document.createTextNode(obj.name+" "+obj.email);

var button = document.createElement('input');

// Set the attributes for delete
button.setAttribute('type', 'button');
button.setAttribute('value', 'Delete');
button.setAttribute('onclick',`removeUser(event,'${key.value}')`);

var edit = document.createElement('input');
// Set the attributes for Edit
edit.setAttribute('type', 'button');
edit.setAttribute('value', 'Edit');
edit.setAttribute('onclick',`editUser(event,'${key.value}','${fstname.value}')`);


divTag.appendChild(textNode);
divTag.appendChild(button)
divTag.appendChild(edit)
parent.appendChild(divTag);

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

const editUser=(e,key,name)=>{
    removeUser(e,key);
    
     document.querySelector("#name").value=name;
     document.querySelector("#email").value = key;
    
}



