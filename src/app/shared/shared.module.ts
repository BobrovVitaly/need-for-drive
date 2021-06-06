import {NgModule} from '@angular/core';
import {HoverOverElementDirective} from './directives/hoverOverElement.directive';
import { LanguagesControlComponent } from './components/languages-control/languages-control.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HoverOverElementDirective,
    LanguagesControlComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    HoverOverElementDirective,
    LanguagesControlComponent,
  ],
  providers: [],
})
export class SharedModule { }
