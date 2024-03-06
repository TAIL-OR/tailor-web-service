import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {

  showOptions: boolean = false;

  option = 1;

  openOptions(){
    this.showOptions = !this.showOptions;
  }

  selectOption(id){
    this.option = id;
  }
}
