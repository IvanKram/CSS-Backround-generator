let css = document.querySelector("h3");
let color1 = document.getElementById("color 1");
let color2 = document.getElementById("color 2");
let body =  document.getElementById("gradient");
// making default CSS lines appear
function setDefaultCSS(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")"; 
    
    css.textContent = body.style.background + ";";
}
// calling the function which shows default CSS lines.
setDefaultCSS();

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")"; 
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);