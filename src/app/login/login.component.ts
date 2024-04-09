import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  validationInput(){

    if(this.usario =='admin' && this.password == 'admin'){
      return this.navegacion();
    }else{
      
    }
  }

  navegacion(){
    this.router.navigate(['/invetari']);
  }


}
