import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'register', component:RegisterComponent},

    {path:'invetari',
        loadComponent: () => import('./inventari/inventari.component'),
        children:[
            {
                path:'dasboarh',
                title:'Dasboarh',
                loadComponent:() => import('./inventari/dasboarh/dasboarh.component'),
            }
            , {
                path:'producto',
                title:'Producto',
                loadComponent:() => import('./inventari/producto/producto.component'),
            }
            , {
                path:'view-detail/:id',
                title:'Vista del Producto',
                loadComponent:() => import('./inventari/view-detail/view-detail.component'),
            }
            , {
                path:'contacto',
                title:'Contaco',
                loadComponent:() => import('./inventari/contacto/contacto.component'),
            }
        ]
    }
    

    
];
