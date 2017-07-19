var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
 createCanvas(1000,400);
}

function draw() {

  background(25);
   //distance from center of the screen
   var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

   fill (random(200, 250), random(200, 250), random(200, 250));
     ellipse (x, y, 20, 20);

   //bouncing horizontally
     x = x + xspeed;
     
    if (x > 1000 || x < 0)  {
        xspeed = -xspeed;
     }

   //bouncing veritcally
     y = y + yspeed;

   if (y > 400 || y < 0) {
          yspeed = -yspeed;
     }
fill("white");
rect(30, 20, 30, 350);


fill("white");
rect(950, 20, 30, 350);

 }



