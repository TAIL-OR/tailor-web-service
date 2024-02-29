import { AuthService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PagerGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Check your condition here
    const shouldBlockPager: boolean = !this.authService.isAuthenticated;
    if (!shouldBlockPager) {
      return true; // Allow navigation
    } else {
      // Navigate away or show an error message
      this.router.navigate(['/']); // Example of navigating to an error page
      return false; // Block navigation
    }
  }
}