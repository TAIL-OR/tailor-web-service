import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrl: './horizontal-bar-graph.component.scss'
})
export class HorizontalBarGraphComponent implements OnInit {
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
