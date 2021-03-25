const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(600,470,70);
    stone= new Stone(400,470,120,100);
    iron=new Iron(250,300,width,height);
    r1=new Ball(500,470,15);
    r2=new Ball(485,470,15);
    r3=new Ball(470,470,15);
    r4=new Ball(455,470,15);
    r5=new Ball(440,470,15);
    r6=new Ball(425,470,15);
    r7=new Ball(410,470,15);
    r8=new Ball(395,470,15);
    r9=new Ball(380,470,15);
    r10=new Ball(365,470,15);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    r6.display();
    r7.display();
    r8.display();
    r9.display();
    r10.display();
 
}