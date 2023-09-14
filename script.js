// fires only once - when the user presses the key
document.addEventListener("keypress", function() {
	console.log("You've pressed the key");
});

// will fire many times while the key is pressed
document.addEventListener("keydown", function() {
	console.log("You're pressing the key");
});

// fires only once - when the user releases the key
document.addEventListener("keyup", function() {
	console.log("You've released the key");
});