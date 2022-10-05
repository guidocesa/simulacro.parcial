import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { Output, EventEmitter } from '@angular/core';
import { Actor } from '../services/actor';
@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {

  @Output() actorEmitido: EventEmitter<Actor> = new EventEmitter();



  constructor(private actoresServ: ActoresService) {

  }

  listadoActores:any;

  ngOnInit(): void {
    this.actoresServ.getActores().subscribe( (data:any) => {
      this.listadoActores = data;
    });
    console.log(this.listadoActores);
  }

  emitirActor(actor:Actor)
  {
    this.actorEmitido.emit(actor);
  }



}
