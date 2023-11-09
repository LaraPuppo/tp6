class Aventura {
  constructor() {
    //this.c = 19;
    //this.y = 0;
    //this.pantalla = [];
    //this.textos = [];
    //this.pantallas = p;
    this.estado = 0;
    this.boton = new Boton ();
    this.pantalla = new Pantalla (this.pantallas);  
    
  }

  mostrar() {
    console.log(this.estado);
    switch (this.estado) {
      //this.background = fondo;
      case 0:
      //image (pantalla[0],0,0);
        this.pantalla.mostrar(pantallas,0,100,200,100,300,300,200,100,0);
        this.boton.mostrar(100,100,200,100,"holis",1,0);
        break;
      case 1:
        this.pantalla.mostrar(pantallas,100,200,200,300,300,200,100,300);
        this.boton.mostrar(100,100,200,100,"alo",2,1);
         //this.boton01.mostrar(255,200,0);
        break;
        
      // sigue...
    }
  }

  interactuar() {
    if (this.estado == 0 && this.boton.estaSobre()) {
      this.estado = 1;
    }
    //} else if (this.estado === 1 && this.boton01(100,100,200,100,"ola",2)) {
    //  this.estado = 2;
    //}
    // sigue...
  }
}
  //botonCuadrado(x, y, ancho, alto) {
  //  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
  //}

  //botonCircular(x, y, r) {
  //  return dist(mouseX, mouseY, x, y) <= r;
  //}

  //infoPantallas(indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {
  //  noStroke();
  //  image(this.pantallas[indexP], 0, 0);
  //  fill(255, 100);
  //  rect(x1, y1 - 5, ancho1, alto1);
  //  rect(x2, y2 - 5, ancho2, alto2);
  //  textAlign(CENTER, CENTER);
  //  fill(0);
  //  textSize(15);
  //  text(this.textos[0][indexP], x1, y1 - 5, ancho1, alto1);
  //  text(this.textos[1][indexP], x2, y2 - 5, ancho2, alto2);
  //}

//  hover(x, y, ancho, alto, opcion) {
//    if (this.botonCuadrado(x, y, ancho, alto)) {
//      fill(50, 100);
//      strokeWeight(3);
//      stroke(0);
//      rect(x, y, ancho, alto);
//    } else {
//      fill(100, 100);
//      noStroke();
//      rect(x, y, ancho, alto);
//    }
//    fill(255);
//    textAlign(CENTER, CENTER);
//    textSize(25);
//    text(opcion, x, y - 5, ancho, alto);
//  }

//  botonFinal(x, txt) {
//    if (dist(mouseX, mouseY, x, 530) <= 100 / 2) {
//      fill(200);
//    } else {
//      fill(255);
//    }
//    circle(x, 530, 100);
//    fill(0);
//    textSize(20);
//    textAlign(CENTER, CENTER);
//    text(txt, x, 530 - 5);
//  }

//  botonContinuar() {
//    this.hover(380, 530, 200, 50, "Continuar");
//  }
//}





//class Aventura {
//  constructor() {
//    this.c = 19;
//    this.y = 0;
//    this.pantallas = [];
//    this.textos = [
//      ["", ""],
//      ["", ""],
//    ];
//    this.estado = 0;

//    for (let i = 0; i < this.c; i++) {
//      this.pantallas[i] = loadImage("pantalla" + i + ".png");
//    }

//    this.textos[0][1] =
//      "La guerra de troya estaba en curso y ya había transcurrido una década desde que los griegos habían sitiado la ciudad de Troya";
//    this.textos[1][1] =
//      "Los griegos mantenían cierta ventaja, pero no habían logrado tomar la ciudad. La situación era tensa y la lucha se prolongaba";
//    this.textos[0][2] =
//      "Aquiles tiene un desacuerdo con Agamenón debido al reparto de tesoros de guerra.";
//    this.textos[1][2] =
//      "Agamenón le quita a Aquiles su premio de guerra, una joven llamada Briseida";
//    // Continúa con el resto de los textos...
//  }

//  mostrar() {
//    console.log(this.estado);
//    switch (this.estado) {
//      case 0:
//        image(this.pantallas[0], 0, 0);
//        this.hover(205, 515, 190, 40, "");
//        break;
//      case 1:
//        this.infoPantallas(1, 10, 15, 290, 75, 365, 420, 225, 100);
//        this.botonContinuar();
//        break;
//      // Continúa con el resto de los casos...
//    }
//  }

//  interactuar() {
//    if (this.estado === 0 && this.botonCuadrado(205, 515, 190, 40)) {
//      this.estado = 1;
//    } else if (this.estado === 1 && this.botonCuadrado(380, 530, 200, 50)) {
//      this.estado = 2;
//    }
//    // Continúa con el resto de las interacciones...
//  }

//  botonCuadrado(x, y, ancho, alto) {
//    return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
//  }

//  botonCircular(x, y, r) {
//    return dist(mouseX, mouseY, x, y) <= r;
//  }

//  infoPantallas(indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {
//    noStroke();
//    image(this.pantallas[indexP], 0, 0);
//    fill(255, 100);
//    rect(x1, y1 - 5, ancho1, alto1);
//    rect(x2, y2 - 5, ancho2, alto2);
//    textAlign(CENTER, CENTER);
//    fill(0);
//    textSize(15);
//    text(this.textos[0][indexP], x1, y1 - 5, ancho1, alto1);
//    text(this.textos[1][indexP], x2, y2 - 5, ancho2, alto2);
//  }

//  hover(x, y, ancho, alto, opcion) {
//    if (this.botonCuadrado(x, y, ancho, alto)) {
//      fill(50, 100);
//      strokeWeight(3);
//      stroke(0);
//      rect(x, y, ancho, alto);
//    } else {
//      fill(100, 100);
//      noStroke();
//      rect(x, y, ancho, alto);
//    }
//    fill(255);
//    textAlign(CENTER, CENTER);
//    textSize(25);
//    text(opcion, x, y - 5, ancho, alto);
//  }

//  botonFinal(x, txt) {
//    if (dist(mouseX, mouseY, x, 530) <= 100 / 2) {
//      fill(200);
//    } else {
//      fill(255);
//    }
//    circle(x, 530, 100);
//    fill(0);
//    textSize(20);
//    textAlign(CENTER, CENTER);
//    text(txt, x, 530 - 5);
//  }

//  botonContinuar() {
//    this.hover(380, 530, 200, 50, "Continuar");
//  }
//}
