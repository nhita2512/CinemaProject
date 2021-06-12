import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Group A',
    },
    {
      data: [120, 455, 100, 340],
      label: 'Group B',
    },
    {
      data: [45, 67, 800, 500],
      label: 'Group C',
    },
  ];
  chartLabels = ['January', 'February', 'March', 'April'];
  chartOptions = {
    responsive: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
