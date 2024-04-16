import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mensaje: boolean = false
  formularioRegistrarte: FormGroup 

  constructor(
      private router: Router,
      private formularioLogin: FormBuilder) 
    {

      this.formularioRegistrarte = this.formularioLogin.group({
            correo :     ['',[Validators.required, Validators.email]],
            claveUsario:  ['',  [Validators.minLength(8), Validators.required, ]],
      })

      

    }

  validationInput(){
    let disparador = false
    if(this.formularioRegistrarte.value.correo ==='admin' && this.formularioRegistrarte.value.claveUsario === 'admin'){
      return this.navegacion();
    }else{
        disparador = true
        this.mensaje = disparador
      return this.mensaje 
    }
  }

  navegacion(){
    this.router.navigate(['/invetari']);
  }


}
