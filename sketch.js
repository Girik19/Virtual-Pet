//Create variables here
var doge, happyDog
var database, foodS, foodStock

function preload()
{
 
  doge=loadImage("images/dog1.png")
  happyDog=loadImage("images/Dog2.png")
  //load images here
}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(250,250,30,30)
  dog.addImage(doge)
  dog.scale=0.15;
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here

  textSize(18)
  fill("yellow")
  stroke(4)

  text("No of bottles:"+foodS,170,200)
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

    database.ref('/').update({
    Food : x
  })
}



