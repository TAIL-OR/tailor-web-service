import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagerGuard } from './guards/basic-auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'statistics',
    pathMatch: 'full',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule,),
    canActivate:[PagerGuard]
  },
  {
    path: 'statistics/hospital',
    pathMatch: 'full',
    loadChildren: () => import('./hospital-s/hospital-s.module').then(m => m.HospitalSModule),
    canActivate:[PagerGuard]
  },
  {
    path: 'statistics/region',
    pathMatch: 'full',
    loadChildren: () => import('./place-s/place-s.module').then(m => m.PlaceSModule),
    canActivate:[PagerGuard]
  },
  {
    path: 'management',
    pathMatch: 'full',
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule),
  },
  {
    path: 'help',
    pathMatch: 'full',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
