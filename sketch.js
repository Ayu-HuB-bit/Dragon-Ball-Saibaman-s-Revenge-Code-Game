/*
  checklist
  projectile
  projectile collision
  menu
  states
  second phase
  yamcha
  presentation (art, sounds, background)
*/

let x = 350;
let y = 350;
let speed = 5;
let ki = [];
let timer = 0;
let currentKi = 0;
let lives = 3;
let timeMult = 200;
let speedMult = 4.5;
let state = 0;
let sound3= [];
let soundS = [];
let soundT = [];
let gauge = 0;

function preload() {
  sky = loadImage("skies.png");
  ki_gif = loadImage("ki_animated.gif");
  saibaman = loadImage("saibaman.png");
  gauge_icon = loadImage("gauge_icon.png");
  gauge_bg = loadImage("gauge_background.png");
  isCharged = false;
  sound3 = loadSound("DB Voice 3.wav");
  soundS = loadSound("DB Voice 4.wav");
  soundT = loadSound("DB Voice 5.wav");
  yamcha1 = loadImage("yamcha1.png");
  yamcha2 = loadImage("yamcha2.png");
}

function setup() {
  let canvas = createCanvas(700, 800);
  canvas.parent("project");
  angleMode(DEGREES);
}

function draw() {
  frameRate(60);
  background(sky);
  
  switch (state){
    case 0:
       background(255, 165, 0);
  fill(0);
      textAlign(LEFT);
  
  textFont("Comic Sans MS");
  textSize(30);
      fill(20, 60, 20);
  text("Saibaman's Revenge", 220, 60);
  
  
  textSize(25);
      fill(255, 0, 0);
  text("Press Space to start the game", 180, 120);
  
  textSize(20);
      fill(0);
      textAlign(CENTER);
  text("Story: You are a Saibaman, your job is destory Yamcha, a Z fighter, who is trying to protect Plant Earth. You must evade, the upcoming ki blast to survive long enough to retaliate Yamcha back. With a special gauge, waiting and ready to be full, can be use to annaliate Yamcha to smithereens. If you can. This is will be your path for Earth Domination!!!!!", 125, 150, 450);
  
  
  textSize(18);
      fill(0);
  text("Controls:", 100, 450);
  
  textSize(16);
      fill(255, 0 , 0);
  text("↑ Up Arrow", 120, 480);
  
  textSize(16);
      fill(0, 0, 255);
  text("↓ Down Arrow", 120, 510);
  
  textSize(16);
      fill(0, 255, 0);
  text("→ Right Arrow", 120, 540);
  
  textSize(16);
      fill(255, 255, 0);
  text("← Left Arrow", 120, 570);
      
      textSize(18);
      fill(0);
      text("For Saibaman's Voice, Press 's'", 450, 430);
      image(saibaman, 420, 360);
      
      textSize(18);
      fill(127);
      text("For Yamcha's Voice, Press either 'y' or 'h'", 450, 480);
      fill(0);
      text("WHO???", 460, 560);
      text("This Idiot Right Here", 456, 675);
      image(yamcha1, 405, 505, 300, 300);
      textSize(90);
      text("↘", 490, 620);
      textSize(40);
      text("↓", 450, 520);
      
      
   if (keyIsPressed && keyCode === 32) {
        state = 1;
      }
      
       if (keyIsDown(83)) {
   if (!sound3.isPlaying()) {
     sound3.play();
   }
    }
      if (keyIsDown(89)) {
   if (!soundS.isPlaying()) {
     soundS.play();
   }
    }
      if (keyIsDown(72)) {
   if (!soundTsPlaying()) {
     soundTplay();
   }
    }
      break;
    case 1:
      fill(0, 255, 0);
      ellipse(x, y, 50, 50);
      image(saibaman, x - 35, y - 30, 71, 70);
  
  if (keyIsDown(RIGHT_ARROW)){
    x = x + speed;
  }

  if (keyIsDown(LEFT_ARROW)){
    x = x - speed;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    y = y + speed;
  }
  
  if (keyIsDown(UP_ARROW)){
    y = y - speed;
  }
  
  if (x > width){
    x = x - speed;
  }

  if (x < 0){
    x = x + speed;
  }
  
  if (y > height){
    y = y - speed;
  }
  
  if (y < 0){
    y = y + speed;
  }
  
  //Collision
for (let i = ki.length - 1; i >= 0; i--) {
  ki[i].display();
  ki[i].move();
  
let d = dist(x, y, ki[i].position.x, ki[i].position.y);
  
  if (d < 40) {
    ki.splice(i, 1);
    lives = lives - 1;
    console.log("Lives left: " + lives);
  }
  
  else if (ki[i].position.y > height + 100) {
    ki.splice(i, 1);
  }
  }
  
  if (millis() > timer){
    ki.push(new Ki());
    timer = millis() + timeMult;
  }
  
  
  //halfway through phase 1
  if (millis() >= 60000){
    timeMult = 150;
    speedMult = 5;
  }
  if (millis() >= 119999){
    state = 2;
  }
      
drawHearts();

if (lives <= 0) {
  noLoop(); 
  textAlign(CENTER);
  fill(255, 0, 0);
  textSize(50);
  text("GAME OVER", width/2, height/2);
}
      
      if (keyIsDown(83)) {
   if (!sound3.isPlaying()) {
     sound3.play();
   }
    }
      break;
    case 2:
      fill(0, 255, 0);
      ellipse(x, y, 50, 50);
      image(saibaman, x - 35, y - 30, 71, 70);

      image(yamcha2,width / 2, height / 10, 70, 70); 
  
  if (keyIsDown(RIGHT_ARROW)){
    x = x + speed;
  }

  if (keyIsDown(LEFT_ARROW)){
    x = x - speed;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    y = y + speed;
  }
  
  if (keyIsDown(UP_ARROW)){
    y = y - speed;
  }
  
  if (x > width){
    x = x - speed;
  }

  if (x < 0){
    x = x + speed;
  }
  
  if (y > height){
    y = y - speed;
  }
  
  if (y < 0){
    y = y + speed;
  }
  
  //Collision
for (let i = ki.length - 1; i >= 0; i--) {
  ki[i].display();
  ki[i].move();
  
let d = dist(x, y, ki[i].position.x, ki[i].position.y);
  
  if (d < 40) {
    ki.splice(i, 1);
    lives = lives - 1;
    console.log("Lives left: " + lives);
  }
  
  else if (ki[i].position.y > height + 100) {
    ki.splice(i, 1);
  }
  }
  
  if (millis() > timer){
    ki.push(new Ki());
    timer = millis() + timeMult;
  }

      
drawHearts();

if (lives <= 0) {
  noLoop(); 
  textAlign(CENTER);
  fill(255, 0, 0);
  textSize(50);
  text("GAME OVER", width/2, height/2);
}
        //start of phase 2
  if (millis() >= 120000){
    timeMult = 100;
    speedMult = 5.5;
  }
  //halfway through phase 2
  if (millis() >= 210000){
    timeMult = 75;
    speedMult = 6;
  }
  //after 5 minutes
  if (millis() >= 300000){
    timeMult = 5;
  }
      if (keyIsDown(83)) {
   if (!sound3.isPlaying()) {
     sound3.play();
   }
    }
      if (keyIsDown(89)) {
   if (!soundS.isPlaying()) {
     soundS.play();
   }
    }
      if (keyIsDown(72)) {
   if (!soundTsPlaying()) {
     soundTplay();
   }
    }
      break;
  }
  push();
  imageMode(CENTER);
  fill(0);
  strokeWeight(4)
  ellipse(width / 9, height / 1.1, 100, 100);
  image(gauge_bg, width / 9, height / 1.1);
  fill(255);
  strokeWeight(1);
  arc(width/9, height/1.1, 100, 100, 0, gauge);
  circle(width/9, height/1.1, 70);
  fill(0);
  ellipse(width / 9, height / 1.1, 70, 70);
  image(gauge_icon, width / 9, height / 1.1, 70, 70)
  pop();
  
  if (frameCount < 18000){
    gauge = gauge + (1/60);
  }
  
  if (frameCount >= 18000){
    isCharged = true;
  }
  
  if (isCharged === true){
    if (keyCode === 13){
      noLoop();
    }
  }
}

function drawHearts() {
  fill(255, 0, 0);
  textAlign(LEFT)
  for (let i = 0; i < lives; i++) {
    textSize(30);
   text("❤️" , 15 + (i * 40), 70); 
  }
}

class Ki{
  constructor(){
    this.position = createVector(random(width), -30);
    this.size = (30);
  }
  display(){
    fill(255, 255, 0);
    ellipse(this.position.x, this.position.y, 30, 40);
    image(ki_gif, this.position.x - 24, this.position.y - 32, 48, 64);
  }
  move(){
    this.position.y = this.position.y + speedMult;
  }

}
