
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if(keyIsDown(LEFT_ARROW)){
    background('pink')
  }
  if(keyIsDown(DOWN_ARROW)){
    background('orange')

  }

  if(keyIsDown(RIGHT_ARROW)){
    background('blue')
  }

  if(keyIsDown(UP_ARROW)){
    background('gray')
  }
  background(30);

}




