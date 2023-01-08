class Persona {
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

let persona: Persona = new Persona();

persona.setEdad(30);
console.log(persona.getEdad());

persona.setNombre('Giovanni Vargas');
console.log(persona.getNombre());

persona.setTelefono(3034444433);
console.log(persona.getTelefono());