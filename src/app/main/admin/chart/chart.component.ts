import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [90, 37, 55], label: 'Traffic Index' },
  ];
  constructor() {}

  ngOnInit(): void {}
  // //Events

  // onChartHover = ($event: any) => {
  //   window.console.log('onChartHover', $event);
  // };

  // onChartClick = ($event: any) => {
  //   window.console.log('onChartClick', $event);
  // };
}
