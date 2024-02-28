import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.navigateToLogin();
  }

  statisticsPage(){
    this.router.navigate(['statistics']);
  }

  managementPage(){
    this.router.navigate(['management']);
  }
}
