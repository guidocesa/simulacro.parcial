import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private actorCollection: AngularFirestoreCollection<Actor>;
  private actores: Observable<Actor[]>;

  constructor(private afs:AngularFirestore) {
    this.actorCollection = afs.collection<Actor>('actores');
    this.actores = this.actorCollection.valueChanges({idField: 'id'});
   }

  getActores()
  {
    return this.actores;
  }

  agregarActor(actor:Actor){
    this.actorCollection.add(actor);
  }
}
