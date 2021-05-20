var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
   weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  car.shapeColor = ("white");

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = color("purple");


}

function draw() {
  background("black");  
console.log(speed); 

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
  var deformation = ((0.5 * weight * speed * speed)/22500);
  if(deformation < 180 && deformation > 100)
    car.shapeColor = color("red");
  }
  if(deformation < 100) { 
    car.shapeColor = color("green");
  }
 
  
  if(deformation < 100){
    car.shapeColor = color("yellow")
  }

  drawSprites();
} 