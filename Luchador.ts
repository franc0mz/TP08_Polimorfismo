import { Personaje } from "./Personajes";

export class Luchador extends Personaje {

    constructor(nombre: string,) {
        super(nombre, 150, 30)
    }
     caracteristica(): void {
        return console.log(`caracteristicas del personaje Luchador: Daño 30 puntos, Vida 150 puntos, habilidad aumenta su daño al doble`);
    }
    habilidad(): void {
        this.daño = (this.daño * 2);
        console.log(`habilidades del Luchador aumenta al doble su daño `)
    }
}