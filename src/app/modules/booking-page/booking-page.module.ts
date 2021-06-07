import {NgModule} from '@angular/core';
import {BookingPageRoutingModule} from './booking-page.routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {BookingPageComponent} from './booking-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    BookingPageComponent
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
