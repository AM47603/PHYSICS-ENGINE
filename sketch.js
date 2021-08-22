const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,rightEdge,leftEdge,topEdge;
var slide1,slide2,slide3,slide4,slide5,slide6,slide7;
var slide8,slide9,slide10,slide11,slide12,slide13,slide14;
var slide15,slide16,slide17,slide18,slide19,slide20,slide21;
var stand1,stand2,stand3,stand4,stand5,stand6,stand7,slide8,slide9;
var circle1,circle2, circle3,circle4, circle5,circle6, circle7,circle8;
var circle9,circle10, circle11,circle12, circle14,circle15, circle16,circle13;
var sprite1;
var particles=[];
var line;

var score=0;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1230,605);
    
    engine = Engine.create();
    world = engine.world;
    
    ground1=new Ground(613,600,1230,10)
    rightEdge=new Ground(1225,300,10,605)
    leftEdge=new Ground(3,300,10,605);
    topEdge=new Ground(615,3,1230,10);

    slide1 = new Slide(155,480,80,10);
    slide2=new Slide(305,480,80,10)
    slide3=new Slide(455,480,80,10);
    slide4=new Slide(605,480,80,10)
    slide5=new Slide(755,480,80,10);
    slide6=new Slide(905,480,80,10)
    slide7=new Slide(1055,480,80,10);
    slide8=new Slide(1200,480,40,10)
    slide9=new Slide(28,480,40,10);

    stand1=new Slide(155,540,10,110);
    stand2=new Slide(305,540,10,110);
    stand3=new Slide(455,540,10,110);
    stand4=new Slide(605,540,10,110);
    stand5=new Slide(755,540,10,110);
    stand6=new Slide(905,540,10,110);
    stand7=new Slide(1055,540,10,110);

    circle1 = new Circle(80,400,10)
    circle2 =new Circle(230,400,10)
    circle3 = new Circle(380,400,10)
    circle4 =new Circle(530,400,10)
    circle5 = new Circle(680,400,10)
    circle6 =new Circle(830,400,10)
    circle7 = new Circle(980,400,10)
    circle8 =new Circle(1130,400,10)

    slide8 = new Slide(155,320,30,20);
    slide9=new Slide(305,320,30,20)
    slide10=new Slide(455,320,30,20);
    slide11=new Slide(605,320,30,20)
    slide12=new Slide(755,320,30,20);
    slide13=new Slide(905,320,30,20)
    slide14=new Slide(1055,320,30,20);
    
    circle9 = new Circle(80,230,10)
    circle10 =new Circle(230,230,10)
    circle11= new Circle(380,230,10)
    circle12 =new Circle(530,230,10)
    circle13= new Circle(680,230,10)
    circle14=new Circle(830,230,10)
    circle15= new Circle(980,230,10)
    circle16=new Circle(1130,230,10)

    slide15 = new Slide(155,150,30,20);
    slide16=new Slide(305,150,30,20)
    slide17=new Slide(455,150,30,20);
    slide18=new Slide(605,150,30,20)
    slide19=new Slide(755,150,30,20);
    slide20=new Slide(905,150,30,20)
    slide21=new Slide(1055,150,30,20);

    score=0;
}

function draw(){
background(232, 194, 132);
textSize(30)
fill("black")
text("10",70,540)
text("40",215,540)
text("30",360,540)
text("100",505,540)
text("50",650,540)
text("70",810,540)
text("250",955,540)
text("20",1115,540)
textSize(30)
text("Score="+score,1050,50)
    Engine.update(engine);
   

   
    if(score==10){
      textSize(50)
      text("Game Over",505,302)
    }
    else{
      if (frameCount % 60 === 0){
        particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
        score=score+1;

       
      } 
    }
    for (var k = 0; k < particles.length; k++){
      particles[k].display();
    }
     
     
     
        
      
    //drawSprites();  
     
    ground1.display();
    rightEdge.display();
    leftEdge.display();
    topEdge.display();
   
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    slide1.display();
    slide8.display();
    circle4.display();
    circle6.display();
    stand1.display();
    slide13.display();
    circle10.display();
    circle13.display();
    circle16.display();
    slide17.display();
    slide21.display();
    strokeWeight(2);
    stroke(15);
    fill("lightGreen");
    slide5.display();
    slide11.display();
    slide7.display();
    slide9.display();
    circle3.display();
    stand5.display();
    stand7.display(); 
    slide15.display();
    slide19.display();
    strokeWeight(2);
    stroke(15);
    fill("orange");
    slide3.display();
    slide6.display();
    circle2.display();
    circle5.display();
    slide14.display();
    stand3.display();
    stand6.display();
    circle12.display();
    slide16.display();
    slide20.display();
    strokeWeight(2);
    stroke(15);
    fill("red");
    slide4.display();
    slide2.display();
    circle1.display();
    circle7.display();
    stand4.display();
    stand2.display();
    slide8.display();
    circle11.display();
    circle14.display();
    slide18.display();
    strokeWeight(2);
    stroke(15);
    fill("yellow");
    circle8.display();
    slide12.display();
    slide10.display();
    circle9.display();
    circle15.display();

     
}



