let gogh;
let twilight;

var canvas;

function preload() {
  gogh = loadImage("vangogh.png");
  twilight = loadImage("twilight.png");
}

function setup() {
  canvas = createCanvas(500, 320);
  canvas.position(465, 5);
}

function draw() {
  image(twilight, 0, 0, 500, 320);
  if ((mouseX > 0) && (mouseX < 500) && (mouseY > 0) && (mouseY < 340)){
    clear();
    image(gogh, 110, 0, 250, 340);
  }
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function mousePressed() {
  if ((mouseX > 0) && (mouseX < 250) && (mouseY > 0) && (mouseY < 230)){
    link("vangogh.html");
  }
}
