let backToTop = document.querySelector(".backToTop");

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


