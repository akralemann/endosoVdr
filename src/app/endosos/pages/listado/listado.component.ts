import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { switchMap } from 'rxjs';
import { EndosoService } from 'src/app/service/endoso.service';
import { Coberturas, Status } from '../../interface/coberturas.interface';
import { Rut } from '../../interface/rut.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  
  rut!: Rut;
  path: any;
  status!: Status;
  coberturas!: Coberturas;

  constructor(
    //private activateRoute: ActivatedRoute,
     private endosoService: EndosoService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.getCoberturas()
  }

  getCoberturas(){
    this.path = this.router.url.replace("/endosos/listado/","");
    this.path = this.path.slice(0,this.path.length - 2);
    this.rut = {
      INRUTPR: this.path,
      INITEM: 1
    }
    this.endosoService.getCoberturas(this.rut).subscribe( resp => { 
      console.log(resp);
    })
  }


}
