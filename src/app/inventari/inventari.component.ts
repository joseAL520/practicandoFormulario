import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-inventari',
  standalone: true,
  imports: [RouterModule,RouterModule],
  templateUrl: './inventari.component.html',
  styleUrl: './inventari.component.css'
})
export default class  InventariComponent {

  public menuItmes = routes
    .map(router => router.children ??[])
    .flat() // ayuda a notener un arreglo dentro de otros arreglos
    .filter(routes => !routes.path?.includes(':')); // filtramos los arreglos o rutas con algo especifiico
    
  constructor(){

  }

  actionClick(){
    
  }

  
}
