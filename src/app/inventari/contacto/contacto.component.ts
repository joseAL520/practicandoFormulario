import { Component } from '@angular/core';
import { FormilarioContactoComponent } from "./formilario-contacto/formilario-contacto.component";
import { TablaContactoComponent } from "./tabla-contacto/tabla-contacto.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
    imports: [FormilarioContactoComponent, TablaContactoComponent]
})
export  default class ContactoComponent {

}
