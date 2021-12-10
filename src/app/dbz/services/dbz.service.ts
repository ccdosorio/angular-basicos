import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes() {
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }
}