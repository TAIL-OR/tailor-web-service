import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PlaceSComponent } from './place-s.component';
import { HsopitalSRoutingModule } from './place-s-routing.module';
import { InfoBoxComponent2 } from '../place-s/info-box/info-box.component';
import { DummyGraphComponent } from './dummy-graph/dummy-graph.component';

@NgModule({
declarations:[PlaceSComponent,InfoBoxComponent2, DummyGraphComponent],
  imports: [SharedModule,HsopitalSRoutingModule],

})
export class PlaceSModule {}