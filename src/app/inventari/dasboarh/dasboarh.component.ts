import { Component } from '@angular/core';
import { CartComponent } from "./cart/cart.component";

@Component({
    selector: 'app-dasboarh',
    standalone: true,
    templateUrl: './dasboarh.component.html',
    styleUrl: './dasboarh.component.css',
    imports: [CartComponent]
})
export  default class DasboarhComponent {

}
