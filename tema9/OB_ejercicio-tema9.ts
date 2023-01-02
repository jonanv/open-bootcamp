class Persona1 {
    private edad: number;
    private nombre: string;
    private telefono: number;

    constructor() {
        
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
}

class Cliente extends Persona1 {
    private credito: number;

    public getCredito(): number {
        return this.credito;
    }

    public setCredito(credito: number): void {
        this.credito = credito;
    }
}

class Trabajador extends Persona1 {
    private salario: number;

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }
}

let cliente: Cliente = new Cliente();

cliente.setEdad(30);
console.log(cliente.getEdad());

cliente.setNombre('Giovanni Vargas');
console.log(cliente.getNombre());

cliente.setTelefono(3034444433);
console.log(cliente.getTelefono());

cliente.setCredito(234.555);
console.log(cliente.getCredito());

let trabajador: Trabajador = new Trabajador();

trabajador.setSalario(2340550);
console.log(trabajador.getSalario());