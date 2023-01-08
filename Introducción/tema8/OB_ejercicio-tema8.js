var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Persona;
}());
var persona = new Persona();
persona.setEdad(30);
console.log(persona.getEdad());
persona.setNombre('Giovanni Vargas');
console.log(persona.getNombre());
persona.setTelefono(3034444433);
console.log(persona.getTelefono());
