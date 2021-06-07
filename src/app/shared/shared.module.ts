import {NgModule} from '@angular/core';
import {HoverOverElementDirective} from './directives/hoverOverElement.directive';
import { LanguagesControlComponent } from './components/languages-control/languages-control.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MainMenuComponent} from '../core/main-menu/main-menu.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    MainMenuComponent,
    BreadcrumbsComponent,
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
    BreadcrumbsComponent,
  ],
  providers: [],
})
export class SharedModule { }
