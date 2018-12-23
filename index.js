let css = document.querySelector("h3");
let color1 = document.getElementById("color 1");
let color2 = document.getElementById("color 2");
let body =  document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")"; 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);