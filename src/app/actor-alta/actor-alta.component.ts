import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActoresService } from '../services/actores.service';
import { Actor } from '../services/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public forma: FormGroup;

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
    console.log(this.forma.getRawValue());
    var actor: Actor = this.forma.getRawValue();
    this.actorServ.agregarActor(actor);
  }

}
