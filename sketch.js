var clicks = 0;
var sound;
var img;
let angle = 0;
var posX = 0;
var posY = 0;

function preload() {
  img= loadImage('wedding_card_bg.jpg');
}

function setup() {
  createCanvas(600, 600);
  background(255, 219, 231);
  image(img, 0, 0);
}
  

function draw(){
  flower();
  angle += 1;
}

function flower(){
  push();
  if (clicks >= 1) {
  noStroke();
  fill(255, 182, 193);
    translate(160, 150); //changes 0,0 point to 350, 150
  rotate(radians(40));
  ellipse(25, 0, 50, 20);
  }
  
   if (clicks >= 2) {
  rotate(radians(40));
  ellipse(125, 10, 50, 20);
  }
  if (clicks >= 3) {
  rotate(radians(40));
  ellipse(100, 20, 50, 20);
  }
  if (clicks >= 4) {
  rotate(radians(40));
  ellipse(145, 30, 50, 20);
  }
  if (clicks >= 5) {
    rotate(radians(40));
   ellipse(150, 85, 50, 20);
  }
    if (clicks >= 6) {
     rotate(radians(40));
  ellipse(127, 10, 50, 20);
  }
    if (clicks >= 7) {
     rotate(radians(40));
  ellipse(5, 80, 50, 20);
  }
    if (clicks >= 8) {
     rotate(radians(40));
  ellipse(400, 143, 50, 20);
  }
    if (clicks >= 9) {
     rotate(radians(40));
  ellipse(250, 70, 50, 20);
    }
  if (clicks >= 10) {
     rotate(radians(40));
  ellipse(350, 170, 50, 20);
    }
  if (clicks >= 11) {
     rotate(radians(40));
  ellipse(350, 170, 50, 20);
    }
  if (clicks >= 12) {
     rotate(radians(40));
  ellipse(350, 10, 50, 20);
    }
}

function mouseClicked() {
    clicks++;
  
  if(clicks==1 || 12){
    sound= createAudio('petals.mp3');
    sound.autoplay(true);
  }
 
}