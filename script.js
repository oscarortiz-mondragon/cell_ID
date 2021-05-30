let cellTypes = document.getElementById("cellTypes")
let about = document.getElementById("about")
let quiz = document.getElementById("quizNav")
let up = document.getElementById("up")
// CHANGED THE COLOR OF NAV BAR ON HOVER
cellTypes.onmouseover = whiteBackground
cellTypes.onmouseleave = normalBackground

about.onmouseover = whiteBackground
about.onmouseleave = normalBackground

quiz.onmouseover = whiteBackground
quiz.onmouseleave = normalBackground

function whiteBackground (){
  this.style.cssText = "background-color:#d6f9dd;"
}

function normalBackground () {
this.style.cssText = "background-color: black;  transition: ease-out 0.2s all;"
}




