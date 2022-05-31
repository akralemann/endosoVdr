import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  rut: string = '';
  valido: boolean = true;
  


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validarRut(){
    if(this.rutEsValido(this.rut)){
      this.valido = true;
      this.router.navigate(['endosos/listado/'+ this.rut]);
      
    } else {
       this.valido = false;
    }
  }

  rutEsValido(rut: string): boolean {
    if (!rut || rut.trim().length < 3) return false;
    let rutConGuion = rut.replace(/[^0-9kK-]/g, "").replace("-", "");
    const rutLimpio = rutConGuion.substring(0, rutConGuion.length - 1) + "-" + rutConGuion.charAt(rutConGuion.length - 1);
    if (rutLimpio.length < 3) return false;
  
    const split = rutLimpio.split("-");
    if (split.length !== 2) return false;
  
    const num = parseInt(split[0], 10);
    const dgv = split[1];
  
    const dvCalc = this.calculateDV(num);
    return dvCalc === dgv;
  }
  
  
  calculateDV(rut: number): string {
    const cuerpo = `${rut}`;
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
  
    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      const index = multiplo * Number(cuerpo.charAt(cuerpo.length - i));
  
      // Sumar al Contador General
      suma += index;
  
      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo += 1;
      } else {
        multiplo = 2;
      }
    }
  
    // Calcular Dígito Verificador en base al Módulo 11
    const dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 10) return "k";
    if (dvEsperado === 11) return "0";
    return `${dvEsperado}`;
  }




}
