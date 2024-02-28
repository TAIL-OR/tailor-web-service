import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalSComponent } from './hospital-s.component';

const routes: Routes = [{ path: '', component: HospitalSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HsopitalSRoutingModule {}
