nose_x = 0;
nose_y = 0;

left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.position(100, 195);
    video.size(550, 500);

    canvas = createCanvas(600, 600);
    canvas.position(1200, 195);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#c5ccd6");
    fill('white');
    stroke('black');
    square(nose_x, nose_y, difference);

    document.getElementById("square_side").innerHTML = "Length of the square is "+difference+"px";
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        console.log("nose x and nose y is this  "+ nose_x, nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        console.log("right wrist and left wrist x value is this  "+ right_wrist_x, left_wrist_x);

        difference = Math.floor(left_wrist_x - right_wrist_x);

        console.log(difference);
    }
}