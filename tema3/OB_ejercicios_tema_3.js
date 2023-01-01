"use strict";
function sumar(a, b, c) {
    return a + b + c;
}
sumar(2, 5, 3);
var Coche = /** @class */ (function () {
    function Coche() {
        this.puertas = 4;
    }
    Coche.prototype.incrementarPuertas = function () {
        this.puertas++;
    };
    Coche.prototype.mostrarPuertas = function () {
        return this.puertas;
    };
    return Coche;
}());
var miCoche = new Coche();
miCoche.incrementarPuertas();
miCoche.mostrarPuertas();
