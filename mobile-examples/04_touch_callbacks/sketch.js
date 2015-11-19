var fillEllipse = true;
var bg = 50;
function setup() {
  createCanvas(displayWidth, displayHeight);
  rectMode(CENTER);
}
function draw() {
  background(bg);
  if (fillEllipse) {
    fill(255);
  }
  else {
    noFill();
  }
  rect(width/2, height/2, 100, 100);
}
function touchStarted() {
  fillEllipse = !fillEllipse;
  bg = 128;
}
function touchEnded() {
  bg = 50;
}
function touchMoved() {
  // otherwise the display will move around
  // with your touch :(
  return false;
}