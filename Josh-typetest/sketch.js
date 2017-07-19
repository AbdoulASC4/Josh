function setup(){
    createCanvas(300,300);
    background(200);
    text("4422 You build it up to break it halfway through",10,70);
    text("Just make the call 22",10,110);
    text("boy if you dont!",10, 140);
    text("skrt skrt", 10, 200);
}


var score =0;
var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
  // uncomment to prevent any default behavior
  // return false;
}