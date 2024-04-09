import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventariComponent } from './inventari/inventari.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'invetari',component:InventariComponent}
    

    
];
