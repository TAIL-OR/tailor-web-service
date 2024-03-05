import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-series-bar-graph',
  templateUrl: './time-series-bar-graph.component.html',
  styleUrl: './time-series-bar-graph.component.scss'
})
export class TimeSeriesBarGraphComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef<HTMLCanvasElement>;
  private chart: Chart;

  @Input() x_values;
  @Input() y_values;

  constructor() { }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.x_values,
        datasets: this.y_values
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
