import { Component } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interfaces';
import { CommonModule } from '@angular/common';
import { ServicioContactoService } from '../servicio-contacto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'inventario-contacto-tabla-contacto',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './tabla-contacto.component.html',
  styleUrl: './tabla-contacto.component.css',
  providers:[ServicioContactoService]
})
export class TablaContactoComponent {

  public listaContacto: any [] = []

 
  constructor(
       private _apiMock: ServicioContactoService
  ){}


  ngOnInit():void{
      this._apiMock.getListContact().subscribe(data => {
        this.listaContacto = Object.values(data);
        console.log(data);
      })
  }
  
}
