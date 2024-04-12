import { Component } from '@angular/core';

//graficas
import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'dasboarh-pasetel',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pasetel.component.html',
  styleUrl: './pasetel.component.css'
})
export class PasetelComponent {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {};
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

}
