import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contacto } from '../interfaces/contacto.interfaces';


@Component({
  selector: 'inventario-contacto-formilario-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formilario-contacto.component.html',
  styleUrl: './formilario-contacto.component.css'
})
export class FormilarioContactoComponent {

  formularioContacto: FormGroup 

  constructor(
      private form: FormBuilder
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
      const contactoData: Contacto = this.formularioContacto.value;
      // Aquí puedes enviar el objeto 'contactoData' a tus servicios, por ejemplo
      console.log(contactoData);
      this.formularioContacto.reset()
    } else {
      alert('favo de llenar los campos');
    }

    }
  }

