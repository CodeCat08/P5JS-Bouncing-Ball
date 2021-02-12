/*
This program uses conditional logic to make a
shape bounce around the window space.
*/

//declare ball object
var ball = {
  x:0,
  y:0,
  diameter:30,
  r:255,
  g:0,
  b:255,
  xspeed:3,
  yspeed:3
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //set background color
  background(35,0,15);
  
  //set shape outline property
  noStroke();
  
  //draw ball
  fill(ball.r,ball.g,ball.b);
  ellipse(ball.x,ball.y,ball.diameter,ball.diameter);
  
  //if ball x-position reaches right border
  //then reflect ball
  if(ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  //if ball x-position reaches left border
  //then reflect ball
  else if(ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  
  //move ball y-position by ball.yspeed
  //move ball x-position by ball.xspeed
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}