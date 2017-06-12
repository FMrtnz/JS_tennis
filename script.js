var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// var center
var centerPaddingX = 10;
var centerPaddingY = canvas.height;
var centerX = (canvas.width/2) - (centerPaddingX/2);
var centerY = 0;

// var players
var paddingX = 10;
var paddingY = canvas.height/5;
var offsetPlayer = paddingX*2 ;

// var Player 1
var x1 = offsetPlayer;
var y1 = (canvas.height-paddingY)/2;

// var Player 2
var x2 = canvas.width-(paddingX + offsetPlayer);
var y2 = y1;

var upPressed = false;
var downPressed = false;

// var Ball
var xBall = canvas.width/2;
var yBall = canvas.height/2;
var paddingBall =  12;

var dxBall = 2;
var dyBall = 2;

var collision1 = x1 + paddingX + (paddingBall/2);
var collision2 = x2 - (paddingBall/2);


// player 1 move
document.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e) {
  var relativeY = e.clientY;
  if(relativeY > 0 + paddingY/3 && relativeY < canvas.height - paddingY/3) {
    y1 = relativeY - paddingY/2;
  }
}

// player 2 move
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  // keyCode correspond to a button of the laptop ex 39 => "right arrow"
  if(e.keyCode == 38) {
    upPressed = true;
  }
  // 37 => "left arrow"
  else if(e.keyCode == 40) {
    downPressed = true;
  }
}

function keyUpHandler(e){
  // keyCode correspond to a button of the laptop ex 39 => "right arrow"
  if(e.keyCode == 38) {
    upPressed = false;
  }
  // 37 => "left arrow"
  else if(e.keyCode == 40) {
    downPressed = false;
  }
}

function Center() {
  ctx.beginPath();
  ctx.rect(centerX, centerY, centerPaddingX, centerPaddingY);
  ctx.fillStyle ="white";
  ctx.fill();
  ctx.closePath();
}

function drawPlayer1() {
  ctx.beginPath();
  ctx.rect(x1, y1, paddingX, paddingY);
  ctx.fillStyle ="white";
  ctx.fill();
  ctx.closePath();
}

function drawPlayer2() {
  ctx.beginPath();
  ctx.rect(x2, y2, paddingX, paddingY);
  ctx.fillStyle ="white";
  ctx.fill();
  ctx.closePath();
}

function ball() {
  ctx.beginPath();
  ctx.arc(xBall, yBall, paddingBall, 0, Math.PI*2, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function ball() {
  ctx.beginPath();
  ctx.arc(xBall, yBall, paddingBall, 0, Math.PI*2, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function ballMoving() {
  xBall += dxBall;
  yBall += dyBall;
  if(yBall < paddingBall || yBall > canvas.height - paddingBall) {
    dyBall = -dyBall;
  }
}

function collisionDetection() {
  // collisionDetection player 2
  if(yBall > y2 && yBall < y2 + paddingY && xBall == collision2) {
    dxBall = -dxBall;
  }
  // collisionDetection player 1
  if(yBall > y1 && yBall < y1 + paddingY && xBall == collision1) {
    dxBall = -dxBall;
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+ collision2 + " and " + xBall, 0, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Center();
  drawPlayer1();
  drawPlayer2();
  ball();
  ballMoving();
  collisionDetection();
  drawScore();

  if(upPressed && y2 > 0) {
    y2 -= 7;
  }
  else if(downPressed && y2 < canvas.height - paddingY) {
    y2 += 7;
  }
}

setInterval(draw, 10);
