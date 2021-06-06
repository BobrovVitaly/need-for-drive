import {NgModule} from '@angular/core';
import {HoverOverElementDirective} from './directives/hoverOverElement.directive';
import { LanguagesControlComponent } from './components/languages-control/languages-control.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MainMenuComponent} from '../core/main-menu/main-menu.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    MainMenuComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    MainMenuComponent,
  ],
  providers: [],
})
export class SharedModule { }
