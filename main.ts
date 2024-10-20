import { Personaje } from "./Personajes";
import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";

let mago: Mago = new Mago("Mago");
let arquero: Arquero = new Arquero("Arquero");
let luchador: Luchador = new Luchador("Luchador");

console.log(`${mago.getNombre()} : Daño :${mago.getDaño()} Nivel : ${mago.getNivel()} Vida : ${mago.getPuntosDeVida()}`);
console.log(`${arquero.getNombre()} : Daño :${arquero.getDaño()} Nivel : ${arquero.getNivel()} Vida : ${arquero.getPuntosDeVida()}`);
console.log(`${luchador.getNombre()} : Daño :${luchador.getDaño()} Nivel : ${luchador.getNivel()} Vida : ${luchador.getPuntosDeVida()}`);
console.log("----------------------------------------------------------------------------");
mago.atacar(luchador);
console.log(`Puntos de vida del luchador ${luchador.getPuntosDeVida()}`);
luchador.atacar(arquero);
console.log(`Puntos de vida del arquero ${arquero.getPuntosDeVida()}`);
console.log("----------------------------------------------------------------------------");
// curacion del mago
arquero.atacar(mago);
console.log(`Puntos de vida del mago ${mago.getPuntosDeVida()}`);
mago.habilidad();
console.log(`Puntos de vida del mago ${mago.getPuntosDeVida()}`);
console.log("----------------------------------------------------------------------------");
//aumento daño del luchador
console.log(`Daño del luchador ${luchador.getDaño()}`);
luchador.habilidad();
console.log(`Daño del luchador ${luchador.getDaño()}`);

console.log(`Puntos de vida del arquero ${arquero.getPuntosDeVida()}`);
luchador.atacar(arquero);
console.log(`Puntos de vida del arquero ${arquero.getPuntosDeVida()}`);
mago.defender();
console.log("----------------------------------------------------------------------------");
mago.caracteristica();
arquero.caracteristica();
luchador.caracteristica();
