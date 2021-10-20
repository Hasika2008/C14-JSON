var ball={
  color:["blue", "purple", "red"],
  x: 25,
  y: 30,
  r: 15,
  xspeed:0,
  yspeed:0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.color[1])
  circle(ball.x,ball.y,ball.r)
  ball.xspeed=1
  ball.x=ball.x+ball.xspeed
}