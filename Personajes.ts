export abstract class Personaje {
    protected nombre :string;
    protected nivel :number;
    protected puntosDeVida: number;
    protected daño:number;

    abstract caracteristica():void;
    abstract habilidad():void;
    
    constructor(nombre:string,  puntosDeVida:number,daño:number){
        this.nombre=nombre;
        this.nivel=1;
        this.puntosDeVida=puntosDeVida;
        this.daño=daño;
    }
    getNombre():string{
        return this.nombre;
    }
    getNivel():number{
        return this.nivel;
    }
    getPuntosDeVida():number{
        return this.puntosDeVida;
    }
    getDaño():number{
        return this.daño;
    }
    atacar(jugador:Personaje):void{
        jugador.setPuntosDeVida(jugador.puntosDeVida-this.daño);
        console.log(`${this.nombre} esta atacando a ${jugador.nombre} daño realizado ${this.daño}`);
        
    }
    defender():void{
        console.log(`${this.nombre} esta defendiendo`)
    }
    setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    private setNivel(nivel:number):void{
        this.nivel=nivel;
    }
    private setPuntosDeVida(vida:number):void{
        this.puntosDeVida=vida;
    }
    setDaño(daño:number):void{
        this.daño=daño;
    }
}