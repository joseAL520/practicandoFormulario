import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class ServicioContactoService {

  private apiUrl: string = 'https://gestor-inventario-d9a16-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getListContact():Observable<any>{
    return this.http.get(`${this.apiUrl}/contacto.json`);
  }


  

}
