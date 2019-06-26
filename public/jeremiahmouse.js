let rembrandt;
let jeremiah;

var canvas;

function preload() {
  rembrandt = loadImage("Rembrandt.png");
  jeremiah = loadImage("jeremiah.png");
}

function setup() {
  canvas = createCanvas(500, 320);
  canvas.position(465, 5);
}

function draw() {
  image(jeremiah, 85, 0, 300, 340);
  if ((mouseX > 85) && (mouseX < 385) && (mouseY > 0) && (mouseY < 340)){
    clear();
    image(rembrandt, 110, 0, 250, 340);
  }
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function mousePressed() {
  if ((mouseX > 0) && (mouseX < 250) && (mouseY > 0) && (mouseY < 230)){
    link("rembrandt.html");
  }
}
