import { Component } from '@angular/core';
import { LineaComponent } from "./linea/linea.component";
import { LineaNegativaComponent } from "./linea-negativa/linea-negativa.component";
import { PasetelComponent } from "./pasetel/pasetel.component";

@Component({
    selector: 'app-inventario-dasboarh-graficas',
    standalone: true,
    templateUrl: './graficas.component.html',
    styleUrl: './graficas.component.css',
    imports: [LineaComponent, LineaNegativaComponent, PasetelComponent]
})
export class GraficasComponent {

}
