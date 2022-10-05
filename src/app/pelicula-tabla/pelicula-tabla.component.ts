import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../services/pelicula';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent implements OnInit {

  @Input() peliculas: Observable<Pelicula[]> | undefined;
  @Output() peliClickeadaEvent = new EventEmitter<Pelicula>();

  pelis: Pelicula[] = [];
  isLoaded:boolean = false;

  async forzado(){
    
  }
  
  constructor() {
    
  }
  
  
  ngOnInit(): void {
    console.log(this.peliculas);
    if(this.peliculas != undefined)
    {
      this.peliculas.forEach( t =>
        {
          this.pelis = t;
          console.log(t);
      })
      this.isLoaded = true;
    }
  }

  peliClickeada(id: string)
  {
    console.log(this.pelis.find(peli => peli.id == id));
    this.peliClickeadaEvent.emit(this.pelis.find(peli => peli.id == id));
  }

}
