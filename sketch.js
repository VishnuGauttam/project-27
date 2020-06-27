const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof
var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;



function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

 roof = new Roof(600,100,400,30);

  bob = new Bob(450,380);
  bob2 = new Bob(530,380);
  bob3 = new Bob(610,380);
  bob4 = new Bob(690,380);
  bob5 = new Bob(770,380);

  rope = new Rope(bob.body,roof.body);
  rope2 = new Rope(bob2.body,roof.body);
  rope3 = new Rope(bob3.body,roof.body);
  rope4 = new Rope(bob4.body,roof.body);
  rope5 = new Rope(bob5.body,roof.body);

} 

function draw(){
   
    
    background("white");
    Engine.update(engine);
    roof.display();
    bob.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}
