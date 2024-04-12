import { Component } from '@angular/core';
import { CartComponent } from "./cart/cart.component";
import { GraficasComponent } from "./graficas/graficas.component";

@Component({
    selector: 'app-dasboarh',
    standalone: true,
    templateUrl: './dasboarh.component.html',
    styleUrl: './dasboarh.component.css',
    imports: [CartComponent, GraficasComponent]
})
export  default class DasboarhComponent {

}
