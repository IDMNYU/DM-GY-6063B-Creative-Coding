var bg = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(bg);
  if (touchIsDown) {
    bg = 255;
  }
  else {
    bg = bg - 5;
  }
  if (bg < 0) {
    bg = 0;
  }
}