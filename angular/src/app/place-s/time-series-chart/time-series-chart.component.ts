import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrl: './time-series-chart.component.scss'
})

export class TimeSeriesChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;

  @Input() x_values;
  @Input() y_values;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');

    const data = [65, 59, 80, 81, 56, 55, 40];
    const labels = this.x_values;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: this.y_values
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
      }
    });
  }
}