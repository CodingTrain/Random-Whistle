let x;
let y;

let whistle;
let number;

function setup() {
  createCanvas(4880/4, 1500/4);
  number = createInput('123456');
  let button = createButton('generate');
  button.mousePressed(randomWalk)
  pixelDensity(1);
  whistle = createGraphics(4880, 1500);
  whistle.pixelDensity(1);
  background(200);

}

function randomWalk() {
  whistle.background(255);
  x = whistle.width/2;
  y = whistle.height/2;
  const stepSize = 4;
  randomSeed(parseInt(number.value()));
  for (let i = 0; i < 1000000; i++) {
    //canvas.stroke(0);
    //canvas.point(x, y);
    whistle.noStroke();
    whistle.fill(0);
    whistle.rectMode(CENTER);
    whistle.rect(x, y, stepSize, stepSize);
    whistle.strokeWeight(stepSize);
    const r = int(random(4));

    switch (r) {
    case 0:
      x = x + stepSize;
      break;
    case 1:
      x = x - stepSize;
      break;
    case 2:
      y = y + stepSize;
      break;
    case 3:
      y = y - stepSize;
      break;
    }
  }
  whistle.save("randomwalk.png");
  imageMode(CORNER);
  image(whistle, 0, 0, width, height);
  noLoop();
}
