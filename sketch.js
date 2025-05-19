var diam1=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   background("#003366");
} 

//The draw function happens over and over again
function draw() {
 //an RGB color for the canvas' background
  //circle
 
  strokeWeight(5);// an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
 // center of canvas, 20px dia
fill("#ff0000");
ellipse(200,200,diam1,diam1);
  diam1=diam1+1;
 stroke("#ffff00"); // an RGB color for the circle's border
  fill("#add8e6");
ellipse(mouseX,mouseY,20,20); 
textSize(20);
textFont("Georgia");
textStyle(ITALIC);
textAlign(CENTER);
text("Jack's Stars",200,40);

}
