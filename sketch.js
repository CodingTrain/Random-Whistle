let x;
let y;

function setup() {
  const canvas = createCanvas(800, 500);
  canvas.parent('p5canvas');
  background(0);
  x = width / 2;
  y = height / 2;

  let params = getURLParams();
  console.table(params);
  let name = params.name || 'Choo Choo';
  let seed = params.seed || '12345';
  randomSeed(int(seed));

  select('#thanks').html(
    `Thank you ${name} for your support of The Coding Train!`
  );
  select('#walk').html(
    `Enjoy this unique random walk with your personalized seed of ${seed}!`
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
