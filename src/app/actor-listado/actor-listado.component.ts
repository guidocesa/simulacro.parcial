import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from '../services/actor';


@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  @Output() actorEmitido: EventEmitter<Actor> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitirActor(actor:Actor)
  {
    this.actorEmitido.emit(actor);
  }

}
