import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrl: './time-series-chart.component.scss'
})

export class TimeSeriesChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');

    const data = [65, 59, 80, 81, 56, 55, 40];
    const labels = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21'];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Óbitos',
          data: data,
          backgroundColor: 'rgb(22, 83, 157)',
        }]
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