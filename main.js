
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(600,550);
    canvas.position(660,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("left wrist ="+leftWrist+"right wrist ="+rightWrist+"difference = "+difference);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    background("violet");
    fill("#CA5F95");
    textSize(difference);
    text("Coding",50,300);
    document.getElementById("square_size").innerHTML ="Width and height of the square will be = "+ difference;
}

