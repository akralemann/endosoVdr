import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rut } from '../endosos/interface/rut.interface';

@Injectable({
  providedIn: 'root'
})
export class EndosoService {

  private baseUrl: string = environment.URL_API_BASE;
  

  constructor( private http: HttpClient ) { }

  getCoberturas(rut: Rut): Observable<Rut>{
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Rut>(`${this.baseUrl}/PolizaCobertura`, rut);
  }

}
