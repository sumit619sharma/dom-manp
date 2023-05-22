let sub = document.querySelector(".submit");
sub.addEventListener("click", (e) => {
    e.preventDefault();
 
     // store detail to local-storage******************
    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
    console.log(`${fstname.value} ${email.value}` );
    var details = {
        name: fstname.value,
        email: email.value
    }
    
    
   var set= localStorage.setItem("userDetail" , JSON.stringify(details))
    var get  = JSON.parse(localStorage.getItem("userDetail"));
    console.log(get," working fine");
    
});

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
