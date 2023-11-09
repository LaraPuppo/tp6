let aventura;
let pantallas = [];


function preLoad(){
  for ( let i = 0; i < 19; i++ ) {
    pantallas[i] = loadImage("assets/pantalla"+ i +".png");
  }
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.mostrar(pantallas);
}

function mousePressed() {
  aventura.interactuar();
}
