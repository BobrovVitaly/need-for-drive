import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MainPageRoutingModule} from './main-page.routing.module';
import {SliderComponent} from './slider/slider.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SliderComponent,
  ],
  imports: [
    MainPageRoutingModule,
    HttpClientModule,
    TranslateModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [
  ],
  providers: [],
})
export class MainPageModule { }
