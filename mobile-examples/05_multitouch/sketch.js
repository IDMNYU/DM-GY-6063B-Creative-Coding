function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(50);
  noStroke();
  fill(255, 192);
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y,
      100+sin(i+frameCount*0.1)*50,
      100+sin(i+frameCount*0.1)*50);
  }
}

function touchMoved() {
  return false;
}