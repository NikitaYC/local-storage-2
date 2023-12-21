let userdata = document.getElementById("userdata");
let retrieve = document.getElementById("retrieve");
let display = document.getElementById("display");

userdata.addEventListener("submit" , function(event){
    event.preventDefault();


let name = document.getElementById("name").value;
let age = document.getElementById("age").value;

localStorage.setItem("userName" , name);
localStorage.setItem("userAge" , age);

userdata.reset();
});

retrieve.addEventListener("click" ,function(){

    let storedname = localStorage.getItem("userName");
    let storedage = localStorage.getItem("userAge");


    if(storedname && storedage){
        display.innerHTML = `<p>User Name: ${storedname}<p> <p> User Age: ${storedage}`
    }
    else{
        display.innerHTML =`<p> No data stored<p>`
    }
});