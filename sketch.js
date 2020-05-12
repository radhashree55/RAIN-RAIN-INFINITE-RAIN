let drop = [];

function setup() {
  createCanvas(1350,500);

  for (let i = 0; i < 3000; i++) {
    drop[i] = new Drop; 
  }
}

function draw() {
  background(0); 

  for (let i = 0; i < 3000; i++) {
    drop[i].display();
    drop[i].fall();
  }
}