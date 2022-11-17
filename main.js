status = " ";

function setup(){
  canvas = createCanvas(420, 390);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function start(){
  model = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
  ggggg = document.getElementById("inputt");
}

function modelLoaded(){
  console.log("modelLoaded");
  status = true;
}

function draw(){
  image(video, 0, 0, 420, 390);
}