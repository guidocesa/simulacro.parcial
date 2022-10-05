import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public countriesUrlEurope = 'https://restcountries.eu/rest/v2/region/europe';

  constructor(private http: HttpClient) { }

  public obtenerListadoParametro(url:any){
    return this.http.get(url);
  }
}
