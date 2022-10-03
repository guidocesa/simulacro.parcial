import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';



const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'busqueda', component: BusquedaComponent, children:[
    {path: 'peliculas', children:[
      {path: 'alta', component: PeliculaAltaComponent},
      {path: 'listado', component: PeliculaListadoComponent}
    ]},
    {path: 'actor', children:[
      {path: 'alta', component: ActorAltaComponent},
      {path: 'listado', component: ActorListadoComponent}
    ]},
  ]},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: '', redirectTo: 'busqueda', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }