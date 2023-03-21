noseX = 0;
noseY = 0;
marioX = 0;
marioY = 0;
img = "";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage('mario.jpg');
}

function setup() 
{
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
	console.log('Model Loaded!');
}

function draw() 
{
	game();
	background('#D3D3D3');
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if(noseX > 300)
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}
	image(img, marioX, marioY, 40, 70);
	console.log(marioX, marioY);
}
function gotPoses(results)
{
	if(results.length > 0)

	{		
		console.log(results);
		noseX = results[0].pose.nose.X;
		noseY = results[0].pose.nose.Y;
	}

}
