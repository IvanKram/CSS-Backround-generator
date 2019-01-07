let css = document.querySelector("h3");
let color1 = document.getElementById("color 1");
let color2 = document.getElementById("color 2");
let body =  document.getElementById("gradient");
let randomButton = document.getElementById("randomButton");
let colorBox = document.getElementById("colorBox");
let directionSel = document.getElementById("directionSel");
let colorSel = document.getElementById("colorSel");
let color3;
let colorSwCounter = 0;
// making default CSS lines appear
function setDefaultCSS(){
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";";
}
// calling the function which shows default CSS lines.
setDefaultCSS();

// adding a 3rd color option
function add3color() {
	if (colorSel.value === "3" && colorSwCounter === 0) {
		let input3 = document.createElement("INPUT");
		input3.setAttribute("type", "color");
		input3.setAttribute("name", "color3");
		input3.setAttribute("id", "color 3");
		input3.setAttribute("value", "#0000ff");
		//input3.setAttribute("class", "animated fadeInRight delay-0.2s");
		colorBox.appendChild(input3);
		color3 = document.getElementById("color 3");
		setGradient();
		colorSwCounter = 1;

	} else {
		colorBox.removeChild(color3);
		colorSwCounter--;
	}
}
//Getting a gradient created from the two inputs.
function setGradient() {
	if (color3 === undefined) {
		body.style.background = directionSel.value
			+ color1.value
			+ ", "
			+ color2.value
			+ ")";
	} else {
		body.style.background = directionSel.value
			+ color1.value
			+ ", "
			+ color2.value
			+ ", "
			+ color3.value
			+ ")";
	}
	css.textContent = body.style.background + ";";
}

// getting a gradient created for 3 inputs


// color settings
function get_random_color() {
	function c() {
		var hex = Math.floor(Math.random()*256).toString(16);
		return ("0"+String(hex)).substr(-2); // pad with zero
	}
	return "#"+c()+c()+c();
}



function setRandomColor() {
	//$("#colorpad").css("background-color", getRandomColor());
	if (color3 === undefined) {
		color1.value = get_random_color();
		color2.value = get_random_color();
	} else {
		color1.value = get_random_color();
		color2.value = get_random_color();
		color3.value = get_random_color();
	}
	setGradient();
}


//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColor);
directionSel.addEventListener("input", setGradient);
colorSel.addEventListener("input", add3color);
colorBox.addEventListener("input", setGradient);
