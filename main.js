var img;
var canvas;

function preload() {
  img = loadImage("assets/dog.png");
}

function setup() {
  canvas = createCanvas(500, 500);
  img.filter(GRAY);
  img.loadPixels();
}

function draw() {
  clear();
  image(img, 0, 0);
}
