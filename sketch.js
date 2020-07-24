var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  this.image = loadImage("Sprites/dog(1).png");
}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite(250,250,10,10)
  image(this.image,0,0,this.width,this.height);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(Up_ARROW)){
  writeStock(foods);
  dog.addImage(happyDog);
}
  drawSprites();
  

  textSize(30);
  stroke("Green");
  Text("Note: Press the up arrow Key to feed the dog milk!!",50,50);
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(){

if(x<= 0){
  x = 0;
}
else{
x = x - 1;
}


  database.ref('/').update({
    Food:x
    })
}



