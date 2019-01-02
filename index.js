let css = document.querySelector("h3");
let color1 = document.getElementById("color 1");
let color2 = document.getElementById("color 2");
let body =  document.getElementById("gradient");
let randomButton = document.getElementById("randomButton");
let directionSel = document.getElementById("directionSel");
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

//Getting a gradient created from the two inputs.
function setGradient() {
	body.style.background = directionSel.value
		+ color1.value
		+ ", "
		+ color2.value + ")";

	css.textContent = body.style.background + ";";
}



function get_random_color() {
	function c() {
		var hex = Math.floor(Math.random()*256).toString(16);
		return ("0"+String(hex)).substr(-2); // pad with zero
	}
	return "#"+c()+c()+c();
}



function setRandomColor() {
	//$("#colorpad").css("background-color", getRandomColor());
	color1.value = get_random_color();
	color2.value = get_random_color();
	setGradient();
}





color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColor);
directionSel.addEventListener("input", setGradient);