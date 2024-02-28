import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { UnitSummaryComponent } from './unit-summary/unit-summary.component';

@NgModule({
declarations:[ManagementComponent,UnitSummaryComponent],
  imports: [SharedModule,ManagementRoutingModule,MatIconModule],

})
export class ManagementModule {}