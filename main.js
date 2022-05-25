video="";
status = "";
object = [];

function preload(){
video = createVideo('video.mp4');
video.hide();
}
function setup(){
canvas = createCanvas(350, 290);
canvas.center()
}
function draw(){
image(video , 0 , 0 , 350 , 290);
if(status!=""){
    objectd.detect(video , gotResult);
    for(i=0; i<object.length;i++)
    {
        document.getElementById("stats").innerHTML = "Status : Objects detected";
        document.getElementById("idn").innerHTML = "Number of objects detected are: "+object.length;
        fill("red");
        percent = floor(object[i].confidence*100);
        text(object[i].label +" " + percent + "%" , object[i].x +15 , object[i].y +15);
        noFill();
        stroke("red");
        rect(object[i].x , object[i].y , object[i].width , object[i].height)
    }
}

}

function kabbab(){
    objectd = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("stats").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("code green");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function gotResult( error , results){
    if(error){
        console.log(error);

    }
    else{
        console.log(results);
        object = results;
    }
}
