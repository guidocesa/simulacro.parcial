import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActoresService } from '../services/actores.service';
import { Actor } from '../services/actor';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public forma: FormGroup;
  pais:any = {
    name: {
      common: ""
    },
    foto: ""
  };

  constructor(private fb: FormBuilder, private actorServ:ActoresService) { 

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(0), Validators.max(99)]],
      'sexo': ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

  public aceptar(): void {
    var actor: Actor = this.forma.getRawValue();
    actor.pais = this.pais.name.common;
    actor.foto = this.pais.flags.png;
    this.actorServ.agregarActor(actor);
  }

  paisSeleccionado(pais:any)
  {
    console.log(pais.name.common);
    this.pais = pais;
  }

}
