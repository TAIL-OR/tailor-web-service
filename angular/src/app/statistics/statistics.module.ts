import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
declarations:[StatisticsComponent,InteractiveMapComponent],
  imports: [SharedModule,StatisticsRoutingModule, LeafletModule],

})
export class StatisticsModule {}