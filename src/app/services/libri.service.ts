import { Libro } from "../model/libro";

export class LibriService
{
    private libri : Libro[] = [
        new Libro('La Divina Commedia', 'Dante Alighieri', 12),
        new Libro('I Promessi Sposi', 'Alessandro Manzoni', 20)
    ]

    getAll() : Libro[]
    {
        return this.libri;
    }

    getRandom() : Libro
    {
        return this.libri[0];
    }
}