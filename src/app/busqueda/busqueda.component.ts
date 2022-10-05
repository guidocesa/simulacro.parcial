import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../services/pelicula';
import { PeliServiceService } from '../services/peli-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculas: Observable<Pelicula[]>;
  peliFueClickeada: boolean = false;
  peliSeleccionada:Pelicula | undefined;



  constructor(private peliServ:PeliServiceService) {
    this.peliculas = this.peliServ.getPelis();
    console.log(this.peliculas);

   }

  ngOnInit(): void {
    
  }

  peliClickeada(peli:Pelicula)
  {
    this.peliFueClickeada = true;
    this.peliSeleccionada = peli;
  }


}
