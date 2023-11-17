class Pantalla {
  constructor(p) {
    this.p = p;
    this.indexP = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.ancho1 =0;
    this.alto1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.ancho2 = 0;
    this.alto2 = 0;
    this.width = width;
    this.height = height;
    //  this.textos[0][1] =
    //  "La guerra de troya estaba en curso y ya había transcurrido una década desde que los griegos habían sitiado la ciudad de Troya";
    //this.textos[1][1] =
    //  "Los griegos mantenían cierta ventaja, pero no habían logrado tomar la ciudad. La situación era tensa y la lucha se prolongaba";
    //this.textos[0][2] =
    //  "Aquiles tiene un desacuerdo con Agamenón debido al reparto de tesoros de guerra.";
    //this.textos[1][2] =
    //  "Agamenón le quita a Aquiles su premio de guerra, una joven llamada Briseida";
    // sigue..
    
  }
//dos arreglos de textos 
  mostrar(indexP,x1,y1,ancho1,alto1,x2,y2,ancho2,alto2) {
    this.indexP = indexP;
    this.x1 = x1;
    this.y1 = y1;
    this.ancho1 = ancho1;
    this.alto1 = alto1;
    this.x2 = x2;
    this.y2 = y2;
    this.ancho2 = ancho2;
    this.alto2 = alto2;
    noStroke();
    image (this.p[indexP],0,0,this.width,this.height);
    fill(255,100);
    rect(this.x1, this.y1 - 5, this.ancho1, this.alto1);
    rect(this.x2, this.y2 - 5, this.ancho2, this.alto2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(15);
    //text(textos[0][this.indexP], this.x1, this.y1 - 5, this.ancho1, this.alto1);
    //text(textos[1][this.indexP], this.x2, this.y2 - 5, this.ancho2, this.alto2);
  }
  
  juego(){
    ///proximamente
  }
}
