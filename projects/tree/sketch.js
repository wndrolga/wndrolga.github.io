let x = 0;
let xChange = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	background(170);
	translate(width / 2, height / 8 * 7);
	scale(1, -1);
	strokeWeight(3);
	tree(x);
	x = x + xChange;
	if (x === 180) {
		xChange = -0.5;
		stroke("saddlebrown");
	}
	if (x === 0) {
		xChange = 0.5;
		stroke("green");
	}
}


function tree(dlina) {
	if (dlina > 5) {
		line(0, 0, 0, dlina);
		push();
		translate(0, dlina);
		rotate(radians(-30));
		tree(dlina / 3 * 2);
		rotate(radians(80));
		tree(dlina / 3 * 2);
		pop();
	}
}