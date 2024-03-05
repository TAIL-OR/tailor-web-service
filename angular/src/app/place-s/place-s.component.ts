import { Component } from '@angular/core';

@Component({
  selector: 'app-place-s',

  templateUrl: './place-s.component.html',
  styleUrl: './place-s.component.scss'
})
export class PlaceSComponent {

    x_values_vac = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21']

    y_values_vac = [{ label: 'Primeira dose', data: [65, 59, 80, 81, 56, 55, 40, 30, 25, 60, 70, 85], backgroundColor: 'rgb(22, 83, 157)' },
    { label: 'Segunda dose', data: [28, 48, 40, 19, 86, 27, 90, 100, 80, 70, 40, 35], backgroundColor: 'green' },
    { label: 'Terceira dose', data: [90, 40, 70, 60, 70, 35, 45, 70, 80, 60, 55, 30], backgroundColor: 'red' } ]
  
    x_values_symptoms = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21']

    y_values_symptoms = [{ label: 'Sintomas leves', data: [65, 59, 80, 81, 56, 55, 40, 30, 25, 60, 70, 85], backgroundColor: 'rgb(22, 83, 157)' },
    { label: 'Sintomas moderados', data: [28, 48, 40, 19, 86, 27, 90, 100, 80, 70, 40, 35], backgroundColor: 'green' },
    { label: 'Sintomas graves', data: [90, 40, 70, 60, 70, 35, 45, 70, 80, 60, 55, 30], backgroundColor: 'red' } ]



    x_values_deaths = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21']
    y_values_deaths = [{
      label: 'Óbitos',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgb(22, 83, 157)',
    }]

    x_values_contaminated = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21']
    y_values_contaminated = [{
      label: 'Contaminados',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgb(22, 83, 157)',
    }]

    x_values_transmission = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21']
    y_values_transmission = [{
      label: 'Taxa de transmissão',
      data: [2, 1.2, 1.3, 0.5, 2.1, 1.7, 1.34,1.6,1.0],
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: false
    },]

    x_values_occupation = ['01/21', '02/21', '03/21', '04/21', '05/21', '06/21', '07/21','08/21','09/21']
    y_values_occupation = [{
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
    },
    {
      label: 'Fila de espera',
      data: [9, 10, 8, 8, 3, 12, 5,9,5],
      borderColor: 'rgba(23, 32, 260, 1)',
      borderWidth: 1,
      fill: false
    },
  
  ]
  }
