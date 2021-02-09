var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var carImg1,carImg2,carImg3,carImg4,trackImg

function preload(){
  carImg1=loadImage("images/bike1.png.png")
  carImg2=loadImage("images/bike2.png.png")
  carImg3=loadImage("images/bike3.png.png")
  carImg4=loadImage("images/bike4.png.png")
  trackImg=loadImage("images/track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}