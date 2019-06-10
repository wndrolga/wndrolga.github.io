let angle = 0;
let clickX = [];
let clickY = [];
let size = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);
	for (let number = 0; number < clickX.length; number++) {
		flower(clickX[number], clickY[number], size[number]);
	}
	turn();
}

function mousePressed() {
	size.push(random(2));
	clickX.push(mouseX);
	clickY.push(mouseY);
}

function keyPressed() {
	if (keyCode === 8) {
		clickX.pop();
		clickY.pop();
	}
}

function flower(sleva, sverhu, razmer) {
	push();
	translate(sleva, sverhu);
	scale(razmer);
	fill("pink");
	ellipse(0, 0, 20, 20); // центр
	rotate(radians(angle));
	for (let krugi = 0; krugi < 12; krugi++) {
		fill("lightblue");
		rotate(radians(30));
		ellipse(0, 30, 10, 30);
	}
	for (let krugi = 0; krugi < 30; krugi++) {
		fill("pink");
		rotate(radians(12));
		ellipse(0, 55, 8, 8);
	}
	pop();
}



function turn() {
	if (angle === 360) {
		angle = 1;
	} else {
		angle = angle + 1;
	}
}