import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-series-bar-graph',
  templateUrl: './time-series-bar-graph.component.html',
  styleUrl: './time-series-bar-graph.component.scss'
})
export class TimeSeriesBarGraphComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef<HTMLCanvasElement>;
  private chart: Chart;

  constructor() { }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21'],
        datasets: [
          { label: 'Primeira dose', data: [65, 59, 80, 81, 56, 55, 40, 30, 25, 60, 70, 85], backgroundColor: 'rgb(22, 83, 157)' },
          { label: 'Segunda dose', data: [28, 48, 40, 19, 86, 27, 90, 100, 80, 70, 40, 35], backgroundColor: 'green' },
          { label: 'Terceira dose', data: [90, 40, 70, 60, 70, 35, 45, 70, 80, 60, 55, 30], backgroundColor: 'red' }
        ]
      },
      options: {
        responsive: true,
        scales: {
          // screenY: [{ stacked: true }],
          // yAxes: [{ stacked: true }]
        }
      }
    });
  }
}
