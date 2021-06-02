let x = [10, 20, 30, 40, 50]; //circle diameter

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(20);
}

function draw() {
	noStroke();
	if (mouseIsPressed) {
		fill(int(random(256)), int(random(256)), int(random(256)), 100); //fill the circles whatever colour and make it translucent
		ellipse(mouseX, mouseY, random(x));
	} //if the mouse is pressed down, draw a circle where the mouse is and make it a random size out of the options in line 1
	if (keyIsPressed) {
		background(int(random(256)), int(random(256)), int(random(256)));
	} //make the background a random colour if a key is pressed
}
