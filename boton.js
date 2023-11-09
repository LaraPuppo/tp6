class Boton {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ancho = 0;
    this.alto = 0;
    this.texto = "a";
    this.nuevoEstado = 0;
    this.estado = 0;
  }

  mostrar(x,y,ancho,alto, txt, nuevoEstado, estado) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = txt;
    this.nuevoEstado = nuevoEstado;
    this.estado = estado;
    if (this.estaSobre()) {
      fill(200);
      strokeWeight(3);
      stroke(0);
    } else {
      fill(0);
      noStroke();
    }
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    text(this.texto, this.x, this.y - 5, this.ancho, this.alto);
  }

  estaSobre() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }

  clic() {
    //if (this.estaSobre()) {
    //  this.estado = this.nuevoEstado; 
    //}
  }
}
