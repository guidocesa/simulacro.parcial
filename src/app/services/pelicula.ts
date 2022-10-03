export interface Pelicula{
    id:string;
    nombre:string;
    tipo:string;
    fechaEstreno:Date | string;
    cantidadPublico:number;
    fotoDePelicula:string;
}