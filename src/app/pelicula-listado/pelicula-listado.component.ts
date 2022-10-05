import { Component, Input, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Pelicula } from '../services/pelicula';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() inputPeliculas: Observable<Pelicula[]> | undefined;
  @Output() peliClickeadaEvent = new EventEmitter<Pelicula>();


  constructor() {
    

  }


  ngOnInit(): void {
    console.log(this.inputPeliculas);
  }

  peliClickeada(peli:Pelicula)
  {
    this.peliClickeadaEvent.emit(peli);
  }

}
