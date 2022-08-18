let backToTop = document.querySelector(".backToTop");
let navBar = document.getElementById("nav")
let navItem = document.querySelectorAll(".nav__item")

// opacity change of back to top
let body = document.body;
let docElem = document.documentElement;
let offset = 100;
let userDocHeight = Math.max(body.offsetHeight, body.scrollHeight, docElem.offsetHeight,docElem.clientHeight, docElem.scrollHeight);
if(userDocHeight != "undefined"){
  offset = userDocHeight/4;
}
 window.addEventListener("scroll",(event)=>{
  scrollPos = docElem.scrollTop || body.scrollTop;
  backToTop.className = scrollPos > offset? "visible": "backToTop"
 })

//  menu bar
let menu = document.querySelector(".menu-btn")
menu.addEventListener('click',()=>{
  menu.classList.toggle("menu-btn--open");
  for(let i = 0; i < navItem.length;i++){
    navItem[i].classList.toggle("nav__item--translateX")
  }
  slidingNavBar();
  }
  
 
)
// Sliding Nav bar taking up full screen
function slidingNavBar(){
    navBar.classList.toggle("navBar--slide")
  
}

// styling nav items to fit horizontal nav bar
