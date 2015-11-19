var rx = 0;
var ry = 0;
var rz = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
  rectMode(CENTER);
  setMoveThreshold(0.1);
}

function draw() {
  background(50);
  noStroke();
  fill(255);
  push();
  translate(ry, rx);
  rotate(rz);
  rect(0, 0, 150, 150);
  pop();
}

function deviceMoved() {
  rx = map(rotationX, -90, 90, 0, displayHeight);
  ry = map(rotationY, -90, 90, 0, displayWidth);
  rz = radians(rotationZ);
}