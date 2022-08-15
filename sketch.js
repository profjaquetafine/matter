let ground
let box
let bird
let world,engine



function setup() {
  
   createCanvas(600,400);
   engine = Matter.Engine.create()
   world = engine.world
   ground = new Box(0,height-20,width,20)
   box = new Box(450,280,50,100)
   bird = new Bird(40,300,50,'red')
   
}

function draw() {
 background(0)
ground.show()
box.show()
bird.show()

}
