import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-chart',

  templateUrl: './progress-bar-chart.component.html',
  styleUrl: './progress-bar-chart.component.scss'
})
export class ProgressBarChartComponent implements OnInit {
  totalCases: number = 100;
  label1Cases: number = 30;
  label2Cases: number = 50;
  label3Cases: number = 20;

  percentage1: number;
  percentage2: number;
  percentage3: number;

  ngOnInit(): void {
    this.calculatePercentages();
  }

  calculatePercentages(): void {
    this.percentage1 = (this.label1Cases / this.totalCases) * 100;
    this.percentage2 = (this.label2Cases / this.totalCases) * 100;
    this.percentage3 = (this.label3Cases / this.totalCases) * 100;
  }
}