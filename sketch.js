var canvas;
var backgroundImg, marioImg, groundImg;
var mario, ground;

function preload()
{
    backgroundImg = loadImage("images/bg.png");
    marioImg = loadAnimation("images/mario_01.png", "images/mario_02.png", "images/mario_03.png", "images/mario_04.png");
    groundImg = loadImage("images/ground.png");
}

function setup()
{
    canvas = createCanvas(1200, 600);

    mario = createSprite(50, height - 55, 50, 50);
    mario.addAnimation("mario", marioImg);
    mario.scale = 0.3;

    ground = createSprite(width/2 - 30, height - 10, width, 20);
    ground.addImage(groundImg);
    ground.scale = 0.5;
}

function draw()
{
    background(backgroundImg);
    drawSprites();
}