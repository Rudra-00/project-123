leftwristx=0;
rightwristx=0;
 difference=0;
 function preload(){
    
 }
 function setup(){
canvas=createCanvas(550,500);
canvas.position(600,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
 }
function  draw(){
background('#969A97');
fill("pink");
stroke("pink");
textSize(difference);
text("rudra",30,200 );
document.getElementById("square_sides").innerHTML="font size will be = "+difference+"px";
}


function modelLoaded(){o=
    console.log("poseNet is working");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
console.log("leftwristx= "+leftwristx);
console.log("rightwristx= "+rightwristx);
difference=floor(leftwristx-rightwristx);
console.log("difference= "+difference);
}
}

