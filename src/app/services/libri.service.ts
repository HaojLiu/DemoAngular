import { Injectable } from "@angular/core";
import { Libro } from "../model/libro";

@Injectable()
export class LibriService
{
    private libri : Libro[] = [
        new Libro(1, 'I Promessi Sposi', 'Alessandro Manzoni', 20, 'promessisposi.png'),
        new Libro(2, 'La Divina Commedia', 'Dante Alighieri', 12,'divinacommedia.png')  
    ]

    getAll() : Libro[]
    {
        return this.libri;
    }

    getRandom() : Libro
    {
        return this.libri[1];
    }

    add(l: Libro)
    {
        this.libri.push(l);
    }

    find(stringaRicerca: string): Libro[] {
        stringaRicerca = stringaRicerca.toLowerCase(); //lo rendo case insensitive
        if(stringaRicerca == '') return this.getAll();

        return this.libri.filter(l => l.titolo.toLowerCase().includes(stringaRicerca) || l.autore.toLowerCase().includes(stringaRicerca));
    }

    getOne(par_id : number) : Libro | undefined
    {
        return this.libri.find(l => l.id == par_id);
    }
}