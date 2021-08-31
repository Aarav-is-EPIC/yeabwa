function preload(){
    img=loadImage("tv-in-home.jpeg");

}
function setup(){
    canvas.create(500,500);
    canvas.center();
}
function draw(){
    canvas=image(img,0,0,500,500);
}