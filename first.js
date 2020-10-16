let addInput = document.getElementById("addInput");
let addBtn = document.getElementById("addBtn");
let add = document.getElementById("add");
let overBack = document.getElementById("overBack");
let wordColor =document.getElementById("wordColor");
let myAudio =document.getElementById("myAudio");
let hover = document.getElementById("hover");
let NameInput =document.getElementById("NameInput");
let NameAlert =document.getElementById("NameAlert");
let EmailInput =document.getElementById("EmailInput");
let EmailAlert =document.getElementById("EmailAlert");
let PhoneInput = document.getElementById("PhoneInput");
let PhoneAlert = document.getElementById("PhoneAlert");
// ------------------------------------- java Q1 --------------------------------------------->>
let allItem = [];
if (localStorage.getItem("item")==null) {
    allItem = [];
}
else
{
    allItem = JSON.parse(localStorage.getItem("item"));
    displayItem()
}
function addItem() {
    let item = {name:addInput.value};
    allItem.push(item);
    localStorage.setItem("item" , JSON.stringify(allItem) );
    displayItem();
}
function displayItem() {
    cartona = "";
    for (let i = 0; i < allItem.length; i++) {
        cartona+= `
        
        <li class=" list-unstyled bg-light m-auto d-flex justify-content-around  ">${allItem[i].name}
        <button onclick="DeleteItem() " class="btn btn-danger">X</button>
    </li>
        
        `
        
    }
    add.innerHTML=cartona;
}

function DeleteItem(index) {
    allItem.splice(index,1);
    localStorage.setItem("item" , JSON.stringify(allItem) );
    displayItem();
}




//    ---------------------------------- java Q2-----------------------------------





    $("#wordColor h2").hover(function() {
        
    
   
    let sound = $("#myAudio").trigger('play');
    sound.play();

      
  
    let r =Math.round(Math.random() * 255);
    let g =Math.round(Math.random() * 255);
    let b =Math.round(Math.random() * 255);
    $("overBack").css("backgroundColor" , `rgb( ${r},${g},${b})`) ;
}) , function() {
    sound.pause();
    $("overBack").css("backgroundColor" , "#fff") ;
}




// -------------------------------  java Q3-------------------------------- ------------------------>>
var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    

document.getElementById("days").innerHTML = days + "<p>Days</p> "
document.getElementById("hours").innerHTML = hours + "<p>Hours</p> " 
document.getElementById("mins").innerHTML = minutes + "<p>Minutes</p> " 
document.getElementById("secs").innerHTML = seconds + "<p>Seconds</p> " 
    

if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    
}
}, 1000);


    

// ------------------------- java Q5------------------------------------------>>


function validateName() {
    
    if (NameInput.value== "" ) {
        NameAlert.classList.replace("d-none","d-block");
        

    }
   
    else
    {

        NameAlert.classList.replace("d-block","d-none");
      
    }
}
NameInput.addEventListener("blur", validateName);






function validateEmail() {
    
    if (EmailInput.value== "" ) {
        EmailAlert.classList.replace("d-none","d-block");
        

    }
   
    else
    {

        EmailAlert.classList.replace("d-block","d-none");
      
    }
}
EmailInput.addEventListener("blur", validateEmail);


function validatePhone() {
   
    if (PhoneInput.value== "" ) {
        PhoneAlert.classList.replace("d-none","d-block");
        

    }
   
    else
    {

        PhoneAlert.classList.replace("d-block","d-none");
      
    }
}
PhoneInput.addEventListener("blur", validatePhone);