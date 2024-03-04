import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HospitalSComponent } from './hospital-s.component';
import { HsopitalSRoutingModule } from './hospital-s-routing.module';
import { InfoBoxComponent } from './info-box/info-box.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DummyGraph2Component } from './dummy-graph2/dummy-graph2.component';
import { TimeSeriesDeathComponent } from './time-series-death/time-series-death.component';
import { TimeSeriesDeathFrComponent } from './time-series-death-fr/time-series-death-fr.component';

@NgModule({
declarations:[HospitalSComponent,InfoBoxComponent, HorizontalBarGraphComponent, DummyGraph2Component, TimeSeriesDeathComponent,TimeSeriesDeathFrComponent],
  imports: [SharedModule,HsopitalSRoutingModule,MatProgressBarModule ],

})
export class HospitalSModule {}