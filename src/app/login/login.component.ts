import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usario: string = '';
  password: string = '';


  validationInput(){

    if(!this.usario && !this.password){
      alert('Favor de verificar los campos');
    } 
    return true;
  }


}
