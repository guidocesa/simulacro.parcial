import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.css']
})
export class PaisesTablaComponent implements OnInit {

  listaPaises: any;
  @Output() paisEmitido: EventEmitter<any> = new EventEmitter();

  constructor(private apiPaises:PaisesService) {

  }
  
  ngOnInit(): void {
    this.apiPaises.obtenerListadoParametro('https://restcountries.com/v3.1/name/peru').subscribe((data:any) => {
      this.listaPaises= data;      
    });
  }

  emitirPais(pais:any) {
    this.paisEmitido.emit(pais);
  }

}
