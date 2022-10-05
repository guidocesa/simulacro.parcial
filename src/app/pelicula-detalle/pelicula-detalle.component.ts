import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../services/pelicula';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() pelicula: Pelicula | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
