var editClick = {
    click: false,
    curObj: {}
};

window.addEventListener("DOMContentLoaded",()=>{
    console.log("yes Immmmmmmmmmmmmm  innnnnnnnn======");
    
  var userArr = [];
    axios.get('https://crudcrud.com/api/9c781d1f384845de9667ee169cb75739/personData'
    ).then((resp)=>{
        console.log(resp.data);
  userArr=resp.data;
  console.log("length",userArr.length)
  for(let i=0; i<userArr.length; i++){
      console.log("user",userArr[i]);
    let obj = userArr[i];
    allUser(obj);
  }
  
}).catch((err)=>{
        console.log(err);
     })
    
})

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
    // if(editClick.click){
    //     console.log("inside===",editClick)
    //    let obj = editClick.curObj;
    //     axios.put(`https://crudcrud.com/api/9c781d1f384845de9667ee169cb75739/personData/${obj._id}`
    //     ,details)
    //     .then((resp)=>{
    //         console.log(resp.data);
    //         editClick.click=false;
    //         editClick.curObj={};
    //         location.reload();
    //     }).catch((err)=>{
    //         console.log(err);
    //     })

    // } else{
        axios.post('https://crudcrud.com/api/9c781d1f384845de9667ee169cb75739/personData'
        ,details)
        .then((resp)=>{
            console.log(resp.data);
            allUser(resp.data)
        }).catch((err)=>{
            console.log(err);
        })
    //}
    
   // localStorage.setItem( email.value, JSON.stringify(details))
    //allUser(email,fstname);

//     email.value=""
//    fstname.value=""
});

const allUser = (resp)=>{
    
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
 console.log("object in allUser==", obj);
   let parent = document.getElementById('container');
    let divTag = document.createElement('div');
let textNode = document.createTextNode(obj.name+" "+obj.email);

var button = document.createElement('input');

// Set the attributes for delete
button.setAttribute('type', 'button');
button.setAttribute('value', 'Delete');
button.setAttribute('onclick',`removeUser(event,'${JSON.stringify(obj)}')`);

var edit = document.createElement('input');
// Set the attributes for Edit
edit.setAttribute('type', 'button');
edit.setAttribute('value', 'Edit');
edit.setAttribute('onclick',`editUser(event,'${JSON.stringify(obj)}')`);


divTag.appendChild(textNode);
divTag.appendChild(button)
divTag.appendChild(edit)
parent.appendChild(divTag);

}

const removeUser=(e,obj)=>{
    // delete from ui;
    console.log("object in RemoveUser==",JSON.parse( obj));
    //console.log("eleemnt",e.target.parentNode)
    let child = e.target.parentNode;
    let parent = e.target.parentNode.parentNode;
    // console.log("child",child);
    // console.log("aprent",parent);
    parent.removeChild(child);

    // remove from local storage
   // localStorage.removeItem(key);
   obj = JSON.parse( obj);
    let id = obj._id;
    console.log("id=====",id,obj.name);
    axios.delete(`https://crudcrud.com/api/9c781d1f384845de9667ee169cb75739/personData/${id}`)
    .then((resp)=>{
        console.log("success Delete", resp);
    }).catch((err)=>{
        console.log("not DELETED");
    })
}

const editUser=(e,obj)=>{
 
  
     let nObj = JSON.parse( obj);

    //  // make it Global to handle edit case
    //  editClick.click=true;
    //  editClick.curObj = obj
     
     //let id = obj._id;
    //console.log("edit====",obj);
     document.querySelector("#name").value=nObj.name;
     document.querySelector("#email").value = nObj.email;
     removeUser(e,obj);  
}



