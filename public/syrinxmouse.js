let everdingen;
let syrinx;

var canvas;

function preload() {
  everdingen = loadImage("boetius.png");
  syrinx = loadImage("syrinx.png");
}

function setup() {
  canvas = createCanvas(500, 320);
  canvas.position(465, 5);
}

function draw() {
  image(syrinx, 85, 0, 300, 320);
  if ((mouseX > 85) && (mouseX < 385) && (mouseY > 0) && (mouseY < 340)){
    clear();
    image(everdingen, 110, 0, 250, 340);
  }
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function mousePressed() {
  if ((mouseX > 0) && (mouseX < 250) && (mouseY > 0) && (mouseY < 230)){
    link("boetius.html");
  }
}
