import { Personaje } from "./Personajes";

export class Arquero extends Personaje {
    constructor(nombre: string,) {
        super(nombre, 140, 25)
    }
    caracteristica(): void {
        return console.log(`caracteristicas del personaje Arquero: Daño 25 puntos, Vida 140 puntos, habilidad aumenta su daño al triple`)
    }
    habilidad(): void {
        this.daño = this.daño * 3
        console.log(`habilidades del Arquero aumento del daño al triple`);
    }
}