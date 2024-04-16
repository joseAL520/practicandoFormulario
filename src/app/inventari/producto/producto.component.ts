import { Component } from '@angular/core';
import { FormularioProductoComponent } from "./formulario-producto/formulario-producto.component";
import { TablaProductoComponent } from "./tabla-producto/tabla-producto.component";

@Component({
    selector: 'app-producto',
    standalone: true,
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.css',
    imports: [FormularioProductoComponent, TablaProductoComponent]
})
export default class ProductoComponent {

}
