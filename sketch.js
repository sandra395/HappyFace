
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#EE5B5B");  // Set background color
  // Face
  strokeWeight(8);  // Set stroke weight
  stroke("#57C4B9"); // Set stroke color
  fill(255);  // Set fill color
  ellipse(250, 250, 250, 250); // Draw face (ellipse)
  
  // Eyes
  fill("#57C4B9");  // Set fill color for eyes
  ellipse(200, 220, 20, 20); // Left eye
  ellipse(295, 220, 20, 20); // Right eye
  
  // happy face
  noFill(); // No fill for the arc
  strokeWeight(10);  // Set stroke weight
  stroke("#57C4B9"); // Set stroke color
  arc(255, 255, 140, 140, 0, PI, OPEN); // Draw a happy face using an arc
}
