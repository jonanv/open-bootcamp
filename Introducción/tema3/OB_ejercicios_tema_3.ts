function sumar(a: number, b: number, c: number): number {
  return a + b + c;
}

sumar(2, 5, 3);

class Coche {
  private puertas: number = 4;
  
  public incrementarPuertas(): void {
    this.puertas++;
  }
  
  public mostrarPuertas(): number {
    return this.puertas;
  }
}

let miCoche: Coche = new Coche();
miCoche.incrementarPuertas();
miCoche.mostrarPuertas();