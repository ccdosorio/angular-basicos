import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = '';

  heroes: string[] = ['Spiderman', 'Superman', 'Batman'];

  constructor() {
    console.log("Constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
