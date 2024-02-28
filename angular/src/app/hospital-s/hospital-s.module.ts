import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HospitalSComponent } from './hospital-s.component';
import { HsopitalSRoutingModule } from './hospital-s-routing.module';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
declarations:[HospitalSComponent,InfoBoxComponent],
  imports: [SharedModule,HsopitalSRoutingModule],

})
export class HospitalSModule {}