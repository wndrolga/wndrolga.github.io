let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	translate(width / 2, height / 2);
	background(100);
	fill("#87CEFA");
	ellipse(0, 0, 30);
	fill("#0000FF");
	ellipse(0, 0, 10);
	push();
	rotate(radians(angle));
	
	for (let i = 0; i < 12; i++) {
		
		fill("#00BFFF");
		ellipse(0, 65, 30, 100);
		fill("#0000FF");
		ellipse(0, 65, 10, 50);
		fill("#1E90FF");
		ellipse(0, 140, 50);
		fill("#0000FF");
		ellipse(0, 140, 20);
		ellipse(0, 180, 20);
		rotate(radians(30));
	}
	pop();
	push();
	rotate(radians(-2*angle));
	for (let i = 0; i < 24; i++) {
		fill("#1E90FF");
		ellipse(0, 210, 20);
		rotate(radians(15));
	}
	pop();
angle = angle + 2;
}