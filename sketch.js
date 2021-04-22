var sky, skyImg;
var hb, hbImg;
var yellowBalloonImg, yellowBalloon, blueBalloonImg, blueBalloon, redBalloon, redBalloonImg;
var dad,dadImg;
var curtain, curtainImg;
var curtain2, curtain2Img;
var start, startImg;
var birG, birGImg;
var gift, giftImg;
var arrow, arrowImg;

function preload()
{
skyImg = loadImage("background cloud.png");
hbImg = loadImage("happy birthday.png");  
yellowBalloonImg = loadImage("yellow balloon.png");
blueBalloonImg = loadImage("blue balloon.png");  
  redBalloonImg = loadImage("red balloon.png");
  dadImg = loadImage("dad.png");
  curtainImg = loadImage("brick wall.png");
  curtain2Img = loadImage("brick wall.png");
  startImg = loadImage("restart.png");
  sound = loadSound("199817126.mp3");
  birGImg = loadImage("birthday glitter.png");
  giftImg = loadImage("gift.png");
  arrowImg = loadImage("ARROW.png");
}

function setup()
{
  
 createCanvas(400,400)
  
 sky = createSprite(200,200,200,200);
 sky.addImage(skyImg); 
  
 
 hb = createSprite(200,200,200,200);
 hb.addImage(hbImg); 
  hb.scale=0.6;
  
  dad = createSprite(200,350,20,20);
  dad.addImage(dadImg);
  dad.scale = 0.1;
  
  curtain= createSprite(-80,200,200,200);
  curtain.addImage(curtainImg);
  curtain.scale=0.7;
  
  curtain2 = createSprite(480,200,200,200);
  curtain2.addImage(curtainImg);
  curtain2.scale=0.7;
  
  start= createSprite(200,200,20,20);
  start.addImage(startImg);
  start.scale=0.05;
  
  birG = createSprite(200,200,20,20);
  birG.addImage(birGImg);
  birG.scale = 0.2;
  
  gift = createSprite(10,380,20,20);
  gift.addImage(giftImg);
  gift.scale=0.2;
  
  arrow = createSprite(110,200,20,20);
  arrow.addImage(arrowImg);
  arrow.scale = 0.07;
  arrow.velocityX=2;
}

function draw() 
{
 background("white");
  
  textSize(20);
  fill("black");
  textFont("BOLD");
  text("By Sambodhini !!",250,390);
  
  
  
  curtain.depth = curtain.depth+10;
  curtain2.depth = curtain2.depth+10;
  start.depth = start.depth+10;
  arrow.depth = arrow.depth+10;
  
  
  if(arrow.x>=140)
    {
      arrow.x=110;
    }
  var select_yellowBalloon = Math.round(random(1,6))
  if(select_yellowBalloon==1)
    {
      yellowB();
    }
  var select_blueBalloon = Math.round(random(1,6))
  if(select_blueBalloon==1)
    {
      blueB();
    }
  var select_redBalloon = Math.round(random(1,6))
  if(select_redBalloon==1)
    {
      redB();
    }
  if(birG.y>=200)
    {
      birG.y=5;
    }
   if(mousePressedOver(start))
     {
       curtain.velocityX=-3;
       curtain2.velocityX=3;
       start.visible = false;
       arrow.visible = false;
       sound.loop();
       birG.velocityY=3;
       
     }
  

 drawSprites();
}
  function yellowB()
  {
    yellowBalloon = createSprite(200,200,200,200);
    yellowBalloon.x = Math.round(random(1,900));
    yellowBalloon.addImage(yellowBalloonImg);
    yellowBalloon.velocityY=-7;
    yellowBalloon.scale=0.1;
    yellowBG = new Group();
    yellowBG.add(yellowBalloon);
  }
function blueB()
  {
    blueBalloon = createSprite(200,200,200,200);
    blueBalloon.x = Math.round(random(1,900));
    blueBalloon.addImage(blueBalloonImg);
    blueBalloon.velocityY=-7;
    blueBalloon.scale=0.03;
    blueBG = new Group();
    blueBG.add(blueBalloon);
  }
function redB()
  {
    redBalloon = createSprite(200,200,200,200);
    redBalloon.x = Math.round(random(1,900));
    redBalloon.addImage(redBalloonImg);
    redBalloon.velocityY=-7;
    redBalloon.scale=0.03;
    redBG = new Group();
    redBG.add(redBalloon);
  }