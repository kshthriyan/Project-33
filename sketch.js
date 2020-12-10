const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var division = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
    for(var j = 40; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 55))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,85))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,120))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,150))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,185))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,225))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,265))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,305))
    }
    for(var k = 0; k <=width; k = k+80){
      division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    } 

  }

 

function draw() {
    background(0);
    Engine.update(engine);
    textSize(35)
  text("Score : "+score,20,40);
  fill("red");
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  



    ground.display();
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(100);
        text("Game Over", 200, 400);
       
      } 
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

if(particle!=null)
{
particle.display();      
if (particle.body.position.y>700)
{
if (particle.body.position.x < 300) 
{
score=score+500;      
particle=null;
if ( count>= 5) gameState ="END";                          
}
else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
{
score = score + 100;
particle=null;
if ( count>= 5) gameState ="END";

}
else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
{
score = score + 200;
particle=null;
if ( count>= 5)  gameState ="END";

}                 
}
}
    

   
    
  
 for (var i = 0; i < division.length; i++) {
     
    division[i].display();
  }
  
}


function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}




