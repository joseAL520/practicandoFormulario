import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contacto } from '../interfaces/contacto.interfaces';
import { ServicioContactoService } from '../servicio-contacto.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'inventario-contacto-formilario-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './formilario-contacto.component.html',
  styleUrl: './formilario-contacto.component.css',
  providers:[ServicioContactoService]
})
export class FormilarioContactoComponent {

  formularioContacto: FormGroup 

  constructor(
      private form: FormBuilder,
      private _servicioContacto: ServicioContactoService
  ){
    this.formularioContacto = this.form.group({
        numeroIdentfiacion: ['',[Validators.required, Validators.minLength(9)]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        correo: ['',[Validators.required]],
        numero: ['',[Validators.required, Validators.minLength(10)]],
        direccion: ['',[Validators.required]],
        describcion: [''],
    })
  }


  validator(controlName: string , tipoError:string){
    return this.formularioContacto.get(controlName)?.hasError(tipoError) && this.formularioContacto.get(controlName)?.touched
  }

  addProduct(){

    if (this.formularioContacto.valid) {
      const contactoData = this.formularioContacto.value;
      this._servicioContacto.registrarContacto(contactoData).subscribe()
      this.formularioContacto.reset()
    } else {
      alert('favo de llenar los campos');
    }
    }
  
  }

