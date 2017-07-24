var ship;
var aliens = [];
var shoot = [];

function setup(){
    createCanvas(600,400);
ship =new ship();
for (var i = 0; i < 6; i++){
    aliens[i] =new aliens(i*80+80,60);

}
}
function draw(){
    background(51);
    ship.show();
    ship.move();
}