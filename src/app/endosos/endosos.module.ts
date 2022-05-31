import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndososRoutingModule } from './endosos-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';


import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ClienteComponent } from './component/cliente/cliente.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ListadoComponent,
    HomeComponent,
    ClienteComponent,
  ],
  imports: [
    CommonModule,
    EndososRoutingModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ClienteComponent
  ]
})
export class EndososModule { }
