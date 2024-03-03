import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PlaceSComponent } from './place-s.component';
import { HsopitalSRoutingModule } from './place-s-routing.module';
import { InfoBoxComponent2 } from '../place-s/info-box/info-box.component';
import { DummyGraphComponent } from './dummy-graph/dummy-graph.component';
import { DonutChartsComponent } from './donut-charts/donut-charts.component';
import { TimeSeriesBarGraphComponent } from './time-series-bar-graph/time-series-bar-graph.component';
import { ProgressBarChartComponent } from './progress-bar-chart/progress-bar-chart.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TimeSeriesChartComponent } from './time-series-chart/time-series-chart.component';

@NgModule({
declarations:[PlaceSComponent,
  InfoBoxComponent2, DummyGraphComponent,
  DonutChartsComponent, 
  TimeSeriesBarGraphComponent, 
  ProgressBarChartComponent,
  TimeSeriesChartComponent
],
  imports: [SharedModule,HsopitalSRoutingModule,MatProgressBarModule ],

})
export class PlaceSModule {}