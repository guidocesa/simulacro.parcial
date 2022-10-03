import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  listadoPeliculas: [];

  constructor() {
    this.listadoPeliculas = [];//llamado a la bd
   }


  ngOnInit(): void {
  }

}
