//Create variables here
var dogImage, dog ;
var dogHappy, database , food, foodStock ;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(50,50,10,10);
  food = createSprites(50,50,20,20);
  foodStock= database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogHappy)
}  


drawSprites();
  //add styles here

}



