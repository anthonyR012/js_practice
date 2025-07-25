function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log(`Dibujando el punto en (${this.x}, ${this.y})`);
  };
  return this;
}

const punto = new Punto(10, 20);
punto.dibujar();

const punto2 = new Function(
  "x",
  "y",
  `this.x = x; this.y = y; this.dibujar = function () { console.log(\`Dibujando el punto en (\${this.x}, \${this.y})\`); };`
);

const punto3 = new punto2(50, 485);
punto3.dibujar();

const punto4 = Punto.call({}, 4, 21);
punto4.dibujar();
