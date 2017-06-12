var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// var center
var centerPaddingX = 10;
var centerPaddingY = canvas.height;
var centerX = (canvas.width/2) - (centerPaddingX/2);
var centerY = 0;

// var players
var paddingX = 10;
var paddingY = canvas.height/4;
var offsetPlayer = 10;

// var Player 1
var x1 = offsetPlayer;
var y1 = (canvas.height-paddingY)/2;

var dy1 = 2;

// var Player 2
var x2 = canvas.width-(paddingX + offsetPlayer);
var y2 = y1;

var dy2 = 2;

// player 1 move
document.addEventListener("mousemove", mouseMoveHandler);
function mouseMoveHandler(e) {
  var relativeY = e.clientY;
  if(relativeY > 0 + paddingY/3 && relativeY < canvas.height - paddingY/3) {
    y1 = relativeY - paddingY/2;
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Center();
  drawPlayer1();
  drawPlayer2();
}

setInterval(draw, 10);
