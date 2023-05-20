let sub = document.querySelector(".submit");
sub.addEventListener("click", (e) => {
    e.preventDefault();

    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
    console.log(`${fstname.value} ${email}` );
    fstname.innerHTML='<h1>hello</h1>';
    
});

sub.addEventListener("mouseover", (e) => {
    e.preventDefault();

    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
    console.log(`${fstname.value} ${email}` );
    fstname.innerHTML='<h1>hello</h1>';
    
});


sub.addEventListener("mouseout", (e) => {
    e.preventDefault();

    let fstname = document.querySelector("#name");
    let email = document.querySelector("#email");
    console.log(`${fstname.value} ${email}` );
    fstname.innerHTML='<h1>hello</h1>';
    
});
