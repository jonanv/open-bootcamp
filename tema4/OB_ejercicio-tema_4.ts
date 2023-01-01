let numeroIf: number = 9;

if (numeroIf > 0) {
    console.log('Positivo');
} else if (numeroIf < 0) {
    console.log('Negativo');
} else {
    console.log('Igual a cero')
}

let numeroWhile: number = 0;

while (numeroWhile < 3) {
    console.log('while ', numeroWhile);
    numeroWhile++;
}

let numeroDoWhile: number = 0;

do {
    console.log('Do while ', numeroDoWhile);
    numeroDoWhile++;
} while (numeroDoWhile < 1);

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    console.log('For ', numeroFor);
}

let estacion: string = 'Verano';

switch (estacion.toUpperCase()) {
    case 'VERANO':
    case 'INVIERNO':
    case 'PRIMAVERA':
    case 'OTOÑO':
        console.log(estacion);
        break;
    default:
        console.log('No es una estación');
        break;
}