import { Injectable } from "@angular/core";
import { Libro } from "../model/libro";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"; //libreria per la programmazione asincrona
import { RouterTestingHarness } from "@angular/router/testing";

@Injectable()
export class LibriService
{
    private libri : Libro[] = [
        new Libro(1, 'I Promessi Sposi', 'Alessandro Manzoni', 20, 'promessisposi.jpg'),
        new Libro(2, 'La Divina Commedia', 'Dante Alighieri', 12,'divinacommedia.jpg')
    ]

    constructor(private httpService: HttpClient) {}


    getAll() : Observable<Libro[]>
    {
        return this.httpService.get<Libro[]>('https://80.211.144.168/api/libri');/*.subscribe( r => console.dir(r) );

        console.log('return');
        return this.libri;*/
    }

    getRandom() : Observable<Libro[]>
    {
        return this.httpService.get<Libro[]>('https://80.211.144.168/api/libri/random');
        //return this.libri[1];
    }

    add(l: Libro)
    {
        this.httpService.post(`https://80.211.144.168/api/libri`, l);
        //this.libri.push(l);
    }

    find(stringaRicerca: string): Observable<Libro[]> {
        return this.httpService.get<Libro[]>(`https://80.211.144.168/api/libri/find/${stringaRicerca}`);
        /*stringaRicerca = stringaRicerca.toLowerCase(); //lo rendo case insensitive
        //if(stringaRicerca == '') return this.getAll();

        return this.libri.filter(l => l.titolo.toLowerCase().includes(stringaRicerca) || l.autore.toLowerCase().includes(stringaRicerca));*/
    }

    getOne(par_id : number) : Observable<Libro>
    {
        return this.httpService.get<Libro>(`https://80.211.144.168/api/libri/${par_id}`);
        //return this.libri.find(l => l.id == par_id);
    }
}