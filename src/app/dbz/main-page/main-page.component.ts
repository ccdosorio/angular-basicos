import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Truncks',
    poder: 14000
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    console.log(this.nuevo);
  }

  cambiarNombre(event: Event) {
    console.log(event.target);
  }

}
