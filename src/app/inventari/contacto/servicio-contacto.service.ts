import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './interfaces/contacto.interfaces';

@Injectable({
  providedIn: 'root'
}
)
export class ServicioContactoService {

  private apiUrl: string = 'https://gestor-inventario-d9a16-default-rtdb.firebaseio.com';
  private idFirebas: string = ""

  

  constructor(private http: HttpClient) { }


  getListContact():Observable<any>{
    return this.http.get(`${this.apiUrl}/contacto.json`);
  }


  registrarContacto(data:Contacto){
    return this.http.post(`${this.apiUrl}/contacto.json`,data)
  }
  

}
