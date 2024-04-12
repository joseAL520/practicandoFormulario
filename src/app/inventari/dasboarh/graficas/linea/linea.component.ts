import { Component } from '@angular/core';

//importaciones de graficas
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';





@Component({
  selector: 'dasboarh-grafica-linea',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './linea.component.html',
  styleUrl: './linea.component.css'
})
export class LineaComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: [
      "Enero", "Febrero", "Marzo", 
      "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", 
      "Octubre", "Noviembre", "Diciembre"
    ],

    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
  

}
