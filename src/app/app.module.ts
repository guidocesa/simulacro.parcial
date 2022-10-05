import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeliculaTablaComponent } from './pelicula-tabla/pelicula-tabla.component';
import { PeliServiceService } from './services/peli-service.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaisesTablaComponent } from './paises-tabla/paises-tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorTablaComponent } from './actor-tabla/actor-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BusquedaComponent,
    PeliculaTablaComponent,
    PeliculaDetalleComponent,
    NavbarComponent,
    PaisesTablaComponent,
    ActorTablaComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PeliServiceService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
