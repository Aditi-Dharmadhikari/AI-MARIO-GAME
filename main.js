img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	img = loadImage("mario01.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(600,300);
  
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
	
	
}

function draw() {
	

	background("#D3D3D3");
  
  if(noseX >300){
    marioX = marioX +1;
  }
  
  if(noseX < 300){
    marioX = marioX -1;
  }
  
  if(noseY < 150){
    marioY = marioY -1;
  }
  image(img,marioX, marioY, 40,70);

}

function model_loaded(){
	console.log("Model Loaded");
}


function gotPoses(results){
	if(results.length > 0){
	  console.log(results);
	  
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  
	  console.log("X : " + noseX + "Y : " + noseY);
	}
  }








