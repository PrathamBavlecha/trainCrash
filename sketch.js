const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var trainSound;
var flag = 0;

function preload(){
  bg = loadImage("images/bg.png")
  trainSound = loadSound("sound/train.mp3")
  crashSound = loadSound("sound/train_crossing.mp3")
}
function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1200,400)
   
  rock = new Rock(1000,300)
  ground = new Ground(600,395,1200,10)

  coach1 = new Boggie(400,390)
  coach2 = new Boggie(300,390)
  coach3 = new Boggie(200,390)
  coach4 = new Boggie(100,390)

  chain1 = new Chain(coach1.body,coach2.body)
  chain2 = new Chain(coach2.body,coach3.body)
  chain3 = new Chain(coach3.body,coach4.body)

}

function draw() {
  Engine.update(engine)
  background(bg);  
  rock.display()
  ground.display()
  coach1.display()
  coach2.display()
  coach3.display()
  coach4.display()
  chain1.display()
  chain2.display()
  chain3.display()

  var collision = Matter.SAT.collides(coach1.body,rock.body)
  if (collision.collided){
    flag = 1
  }
  if (flag === 1){
    textSize (50)
    fill ("red")
    noStroke()
    textAlign(CENTER)
    textFont ("fantasy")
    text ("CRASH",600,100)
    crashSound.play()
  }
}

function keyPressed(){
  if (keyCode=== RIGHT_ARROW){
    Matter.Body.applyForce(coach1.body,coach1.body.position,{x:1,y:0})
    trainSound.play()
  }
}

function keyPressed(){
  if (keyCode=== RIGHT_ARROW){
    Matter.Body.applyForce(coach1.body,coach1.body.position,{x:1,y:0})
    trainSound.play()
  }
}