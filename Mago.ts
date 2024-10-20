import { Personaje } from "./Personajes";

export class Mago extends Personaje {
    constructor(nombre: string,) {
        super(nombre, 125, 20);
    }
    caracteristica(): void {
        return console.log(`caracteristicas del personaje Mago: Daño 20 puntos, Vida 125 puntos, habilidad se cura 40 puntos de vida`)
    }
    habilidad(): void {
        console.log(`Habilidades del personaje mago curarse + 40 puntos de vida`);
        this.puntosDeVida += 40;
    }

}