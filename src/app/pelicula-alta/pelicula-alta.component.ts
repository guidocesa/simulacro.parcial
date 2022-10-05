import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from '../services/actor';
import { PeliServiceService } from '../services/peli-service.service';
import { Pelicula } from '../services/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public forma:FormGroup;
  actor:Actor = {
    id: '',
    nombre: '',
    apellido: '',
    edad: '',
    pais: '',
    foto: ''
  };

  constructor(private fb: FormBuilder, private peliServ:PeliServiceService) { 

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'tipo': ['', Validators.required],
      'fechaEstreno': ['', [Validators.required, Validators.min(0), Validators.max(20000000)]],
      'cantidadPublico': ['', Validators.required],
      'fotoDePelicula': ['', Validators.required],
      'actor': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public aceptar(): void {
    var peli: Pelicula = this.forma.getRawValue();
    this.peliServ.agregarPeli(peli);
  }

  actorSeleccionado(actor:Actor)
  {
    this.actor = actor;
  }

}
