export class Libro
{
    preferito: boolean = false;
    constructor(public id: number, public titolo: string, public autore: string, public prezzo: number, public copertina: string){}
}