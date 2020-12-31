//Create variables here
var dogSad,dogImg1,foodStock=20;
function preload()
{
dogSad=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350)
  dog.addImage(dogSad)
  dog.scale=0.15;
  database=firebase.database()
  foodref=database.ref('food')
  foodref.on("value",readStock)
  updateStock(foodStock)

}


function draw() {  
background("purple")

  drawSprites();


  stroke("Red");
  text("Food remaining : "+foodStock,170,200);
  textSize(23);
  text("Note: Press Space Key To Feed Drago Milk!",200,600);

}
function keyPressed(){
  if(keyCode===32){

updateStock(foodStock)
dog.addImage(dogHappy)
}

  }

function readStock(data){
foodStock=data.val();
}
function updateStock(count){
  if(count>0){
count-=1;
  }else{
    count=0
  }
database.ref('/').update({
  food:count}
)
}
