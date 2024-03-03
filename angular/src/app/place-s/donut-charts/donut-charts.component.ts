import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-donut-charts',
  templateUrl: './donut-charts.component.html',
  styleUrl: './donut-charts.component.scss'
})
export class DonutChartsComponent {
  @ViewChild('donut1') donut1Canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('donut2') donut2Canvas: ElementRef<HTMLCanvasElement>;

  public chartData: number[] = [300, 500];
  public chartData2: number[] = [200, 400];
  public chartLabelsVaccine: string[] = ['Vacinados', 'Não vacinados'];
  public chartLabelsRecover: string[] = ['Recuperação', 'Óbito'];
  public chartColorsVaccine: any[] = [{ backgroundColor: ['red','rgb(22, 83, 157)', ] }];
  public chartColorsRecover: any[] = [{ backgroundColor: ['green','rgb(22, 83, 157)'] }];

  ngAfterViewInit() {
    const ctx1 = this.donut1Canvas.nativeElement.getContext('2d');
    const chart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: this.chartLabelsVaccine,
        datasets: [{ data: this.chartData, backgroundColor: this.chartColorsVaccine[0].backgroundColor }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    const ctx2 = this.donut2Canvas.nativeElement.getContext('2d');
    const chart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: this.chartLabelsRecover,
        datasets: [{ data: this.chartData2, backgroundColor: this.chartColorsRecover[0].backgroundColor }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
