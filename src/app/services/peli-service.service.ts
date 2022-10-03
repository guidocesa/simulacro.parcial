import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliServiceService {

  private pelisCollection: AngularFirestoreCollection<Pelicula>;
  private peliculas: Observable<Pelicula[]>;

  constructor(private afs:AngularFirestore) {
    this.pelisCollection = afs.collection<Pelicula>('peliculas');
    this.peliculas = this.pelisCollection.valueChanges();
   }

  getPelis()
  {
    return this.peliculas;
  }

  agregarPeli(peli:Pelicula){
    this.pelisCollection.add(peli);0
  }
}