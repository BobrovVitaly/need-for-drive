import {NgModule} from '@angular/core';
import {HoverOverElementDirective} from './directives/hoverOverElement.directive';
import { LanguagesControlComponent } from './components/languages-control/languages-control.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '../core/layout/layout.module';

@NgModule({
  declarations: [
    HoverOverElementDirective,
    LanguagesControlComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
  ],
  exports: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    LayoutModule,
  ],
  providers: [],
})
export class SharedModule { }
