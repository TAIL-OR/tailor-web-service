import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dummy-graph',
  templateUrl: './dummy-graph.component.html',
  styleUrls: ['./dummy-graph.component.scss']
})



export class DummyGraphComponent implements OnInit{
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart;

  @Input() x_values;
  @Input() y_values;

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
      
        labels:  this.x_values,
        datasets: this.y_values,},
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