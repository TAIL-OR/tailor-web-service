import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceSComponent } from './place-s.component';

const routes: Routes = [{ path: '', component: PlaceSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HsopitalSRoutingModule {}
