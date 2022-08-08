


//vou faazer essa semana ainda prof, mas como ja ta quase acabando o prazo de entrega
//irei te mandar e depois mandarei o correto 



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

