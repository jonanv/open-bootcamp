var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona1 = /** @class */ (function () {
    function Persona1() {
    }
    Persona1.prototype.getEdad = function () {
        return this.edad;
    };
    Persona1.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona1.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona1.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona1.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona1.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Persona1;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cliente.prototype.getCredito = function () {
        return this.credito;
    };
    Cliente.prototype.setCredito = function (credito) {
        this.credito = credito;
    };
    return Cliente;
}(Persona1));
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trabajador.prototype.getSalario = function () {
        return this.salario;
    };
    Trabajador.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    return Trabajador;
}(Persona1));
var cliente = new Cliente();
cliente.setEdad(30);
console.log(cliente.getEdad());
cliente.setNombre('Giovanni Vargas');
console.log(cliente.getNombre());
cliente.setTelefono(3034444433);
console.log(cliente.getTelefono());
cliente.setCredito(234.555);
console.log(cliente.getCredito());
var trabajador = new Trabajador();
trabajador.setSalario(2340550);
console.log(trabajador.getSalario());
