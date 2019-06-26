let rembrandt;
let nachtwacht;

var canvas;

function preload() {
  rembrandt = loadImage("Rembrandt.png");
  nachtwacht = loadImage("Nachtwacht.png");
}

function setup() {
  canvas = createCanvas(500, 320);
  canvas.position(465, 5);
}

function draw() {
  image(nachtwacht, 0, 0, 500, 340);
  if ((mouseX > 0) && (mouseX < 500) && (mouseY > 0) && (mouseY < 320)){
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
