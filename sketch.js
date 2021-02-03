var pl1,pl2,pl3,pl4,pl5;
var f1;
var gamestate=1;
var gamedata,player1,player2;
var database;

function setup() {
  database=firebase.database()
  createCanvas(1366,625);
  f1=new form1();
}

function draw() {
  background("blue");
  f1.display()  
  drawSprites();
}