import {NgModule} from '@angular/core';
import {BookingPageRoutingModule} from './booking-page.routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {BookingPageComponent} from './booking-page.component';
import {SharedModule} from '../../shared/shared.module';
import {OrderStatusComponent} from './order-status/order-status.component';
import {OrderResultComponent} from './order-result/order-result.component';
import {LocationSelectionComponent} from './location-selection/location-selection.component';
import {ModelSelectionComponent} from './model-selection/model-selection.component';
import {SelectionOfAdditionalParametersComponent} from './selection-of-additional-parameters/selection-of-additional-parameters.component';

@NgModule({
  declarations: [
    BookingPageComponent,
    OrderStatusComponent,
    OrderResultComponent,
    LocationSelectionComponent,
    ModelSelectionComponent,
    SelectionOfAdditionalParametersComponent,
  ],
  imports: [
    BookingPageRoutingModule,
    TranslateModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class BookingPageModule{ }
