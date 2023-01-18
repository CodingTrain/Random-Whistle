let x;
let y;
let seed;
let bold;

function setup() {
  const canvas = createCanvas(800, 500);
  canvas.parent('p5canvas');
  rainbow=false;
  let params = getURLParams();
  console.table(params);
  let name = params.name || 'Choo Choo';
  seed = params.seed || '12345';
  zoom = parseInt(params.zoom) || 2;
  randomSeed(int(seed));

  select('#thanks').html(
    `Thank you ${name} for your support of The Coding Train!`
  );
  select('#walk').html(
    `Enjoy this unique random walk with your personalized seed of ${seed}!`
  );
  resetSketch();
}

function toggleRainbow(){
  rainbow = !rainbow;
}

function keyPressed(){
  print(keyCode)
  if (keyCode === UP_ARROW || keyCode == 38){
    toggleRainbow();
    resetSketch();
  }
}

function draw() {
  colorMode(HSB);
  if(!rainbow){
    stroke(360,0,100);
  }

  else{
    if(frameCount%5==0){hueState = ((hueState+1)%360)};
    stroke(hueState,100,100);
  }
  strokeWeight(zoom);
  point(x, y);
  const r = int(random(4));
  //TODO: add stepsize and scale for mobile 
  switch (r) {
    case 0:
      x = x + zoom;
      break;
    case 1:
      x = x - zoom;
      break;
    case 2:
      y = y + zoom;
      break;
    case 3:
      y = y - zoom;
      break;
  }
}
function resetSketch(){
  background(0);
  x = width / 2;
  y = height / 2;
  hueState=0;
  randomSeed(int(seed));
}
