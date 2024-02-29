import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dummy-graph',
  templateUrl: './dummy-graph.component.html',
  styleUrls: ['./dummy-graph.component.scss']
})



export class DummyGraphComponent implements OnInit{
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
      
        labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Series A',
          data: [12, 19, 3, 5, 2, 3, 7],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }, {
          label: 'Series B',
          data: [7, 11, 5, 8, 3, 9, 12],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        }],},
      options: {
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
  }}