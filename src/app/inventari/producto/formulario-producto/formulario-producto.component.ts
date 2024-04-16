import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'inventario-producto-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
  nombre: string = "miguel";
  formularioProducto: FormGroup;



  constructor (
    private form: FormBuilder
  ){
    this.formularioProducto = this.form.group({
        idProducto: ['',[Validators.required]],
        nombreProducto: ['',[Validators.required]],
        marcaProducto: ['',[Validators.required]],
        categoria: ['',[Validators.required]],
        proveedor: ['',[Validators.required]],
        descripcion: [''],
    })
  }

  validator(controlName: string , tipoError:string){
    return this.formularioProducto.get(controlName)?.hasError(tipoError) && this.formularioProducto.get(controlName)?.touched
  }


  addProduct(){
   console.log(this.formularioProducto)
  }

}
