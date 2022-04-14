import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EndososRoutingModule } from './endosos-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ListadoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EndososRoutingModule
  ]
})
export class EndososModule { }
