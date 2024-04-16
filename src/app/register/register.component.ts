import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    mensaje?: string
    formularioGrupoRegistrar: FormGroup
    

    constructor(
      private form: FormBuilder,
      private router: Router
    ){
      this.formularioGrupoRegistrar = this.form.group({
          tipoDeIndentifiacion:   ['',  Validators.required],
          numeroDeIndentifiacion: ['',[Validators.minLength(9), Validators.required, ]],
          nombres:                ['',  Validators.required],
          apellidos:              '',
          numeroCelular:          ['',[Validators.minLength(12), Validators.required, ]],
          direccion:              ['',  Validators.required],
          correo:                 ['',  [Validators.email, Validators.required ]],
          contrasena:             ['',  [Validators.minLength(8), Validators.required, ]],
          contrasenaValidation:   ['',  [Validators.minLength(8), Validators.required, ]]
      })
      
    }


   
   

    validaion(controlName:string, typeEror:string){
      this.passwordKey()
      return this.formularioGrupoRegistrar.get(controlName)?.hasError(typeEror) && this.formularioGrupoRegistrar.get(controlName)?.touched
    }

    passwordKey(){
      let valido = false
      if( this.formularioGrupoRegistrar.value.contrasena  !== this.formularioGrupoRegistrar.value.contrasenaValidation  ){
          valido = true;
      }
      return valido
    }

    enviar(){
      console.log(this.formularioGrupoRegistrar.status);
      if(this.formularioGrupoRegistrar.status === 'VALID'){
        this.router.navigate(['/invetari']);
      }
      
    }

}
