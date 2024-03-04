import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dummy-graph2',

  templateUrl: './dummy-graph2.component.html',
  styleUrl: './dummy-graph2.component.scss'
})
export class DummyGraph2Component {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
      
        labels:  ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21'],
        datasets: [{
          label: 'Leitos ocupados',
          data: [12, 19, 3, 5, 2, 3, 7,9,10],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Leitos disponíveis',
          data: [7, 11, 5, 8, 3, 9, 12,9,10],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        }],},
      options: {
        plugins: {
          legend: {
            display: true
          }
        },
     aspectRatio:4   
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true
        //     }
        //   }]
        // }
      }
    });
  }
}
