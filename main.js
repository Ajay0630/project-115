function preload() {
}

function setup() {
    canvas = createCanvas(750, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(750, 600);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 750, 600);
}

function takeSnapshot() {
    save("MUSTACHIO.png");
}

function modelLoaded() {
    console.log("PoseNet launch is successful.");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        resultforx = results[0].pose.nose.x - 10;
        resultfory = results[0].pose.nose.y - 10;
        console.log("The mustache's x coordinate is " + resultforx);
        console.log("The mustache's y coordinate is " + resultfory);
    } else {
        console.error("No body found.");
    }
}

function secret() {
}