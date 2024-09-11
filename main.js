// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}

// Curve for the Sun
ctx.fillStyle = "rgb(255, 245, 59)";
curves(0, 0, 150, 5, "fill");

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(80, 260, 460, 80);

// Filled Triangle for Hair
triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
ctx.strokeStyle = "rgb(100, 100, 100)";
triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
ctx.strokeStyle = "rgb(100, 100, 100)";
triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
ctx.fillStyle = "rgb(105, 7, 0)";
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50);

// Filled Circle for Right Eye Socket
circle(400, 250, 50);

// Rectangle for Mouth
rect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380, "stroke");

// First Vertical Line for Teeth
line(250, 350, 250, 410, "stroke");

// Second Vertical Line for Teeth
line(300, 350, 300, 410, "stroke");

// Third Vertical Line for Teeth
line(350, 350, 350, 410, "stroke");

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(115, 147, 179)";
circle(200, 250, 30);

// Filled Circle for Right Eye
circle(400, 250, 10);

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
line(150, 180, 250, 180, "stroke");
ctx.lineWidth = 2;

// Line for Right Eyebrow
line(320, 160, 450, 180, "stroke");

// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320, "stroke");

// Draw the shirt
drawShirt();

// FUNCTIONS

// CIRCLE FUNCTION
function circle(xCord, yCord, radius, type) {
  ctx.beginPath();
  ctx.arc(xCord, yCord, radius, 0, 2 * Math.PI);

  if (type == "stroke") {
    ctx.stroke();
  } else {
    ctx.fill();
  }
}

// RECTANGLE FUNCTION
function rect(xCord, yCord, width, height, type) {
  ctx.fillRect(xCord, yCord, width, height);
}

// LINE FUNCTION
function line(x1, y1, x2, y2, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  if (type == "stroke") {
    ctx.stroke();
  } else {
    ctx.fill;
  }
}

// TRIANGLE FUNCTION
function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();

  if (type == "stroke") {
    ctx.stroke();
  } else if (type == "fill") {
    ctx.fill();
  }
}

// CURVE FUNCTION
function curves(xCord, yCord, radius, end, type) {
  ctx.beginPath();
  ctx.arc(xCord, yCord, radius, end, Math.PI);

  if (type == "stroke") {
    ctx.stroke();
  } else {
    ctx.fill();
  }
}

// SHIRTDESIGN1 FUNCTION
function designCirc(x1, y1, radius, type) {
  ctx.beginPath();
  ctx.arc(x1, y1, radius, 0, 2 * Math.PI);

  if (type == "stroke") {
    ctx.stroke();
  } else {
    ctx.fill();
  }
}

function drawShirt() {
  // ** Shirt Design **
  // Change Shirt to Black
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.strokeStyle = "rgb(0, 0, 0)";
  // Shirt Design with Black Circles
  designCirc(260, 519, 5, "fill");
  designCirc(320, 534, 5, "fill");
  designCirc(347, 515, 10, "stroke");
  designCirc(310, 574, 5, "fill");
  designCirc(233, 590, 8, "stroke");
  designCirc(252, 559, 5, "fill");
  designCirc(290, 550, 3, "fill");
  designCirc(347, 578, 8, "fill");
  designCirc(285, 581, 6, "stroke");
  designCirc(285, 519, 5, "stroke");
  designCirc(346, 553, 5, "stroke");
  designCirc(252, 559, 5, "fill");

  // ** Add "Trapstar" Text with red and white letters **

  // First 4 letters in red
  ctx.fillStyle = "rgb(255, 0, 0)"; // Red color for "Trap"
  ctx.font = "30px Arial"; // Medium print
  ctx.fillText("Trap", 235, 555); // Position near the shirt

  // Remaining letters in white
  ctx.fillStyle = "rgb(255, 255, 255)"; // White color for "star"
  ctx.fillText("star", 300, 555); // Positioned to continue after "Trap"
}
