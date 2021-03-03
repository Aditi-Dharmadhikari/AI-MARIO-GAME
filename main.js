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

    video.parent("game_div");

    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
	
	
}

function draw() {
	
	game(); 

	background("#D3D3D3");
  
 }

function model_loaded(){
	console.log("Model Loaded");
}


function gotPoses(results){
	if(results.length > 0){
	  console.log(results);
	  
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  
	 
	}
  }








