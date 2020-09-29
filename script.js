var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

css.textContent = "linear-gradient(to right, rgb(255,0,0), rgb(255,255,0))";

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	color1.value = Math.floor(Math.random() * 256);
	color1.value = color1.value.toString(16);
	color2.value = Math.floor(Math.random() * 256);
	color2.value = color2.value.toString(16).toUpperCase();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener(setRandom(), setGradient);