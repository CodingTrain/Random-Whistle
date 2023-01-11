let x;
let y;

function setup() {
  const canvas = createCanvas(640, 360);
  canvas.parent('p5canvas');
  background(0);
  x = width / 2;
  y = height / 2;

  let params = getURLParams();
  console.table(params);
  let randomNumber = params.random || '12345';
  let seed = params.seed || 'Choo Choo!';
  randomSeed(int(seed));

  createP(
    `Thank you ${name} for your support of The Coding Train! Enjoy this unique random walk with your personalized seed of ${seed}!`
  );
}

function draw() {
  stroke(255);
  strokeWeight(1);
  point(x, y);
  const r = int(random(4));
  switch (r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
  }
}
