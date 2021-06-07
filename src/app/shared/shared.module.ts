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
import { ChangeLocalityComponent } from './components/change-locality/change-locality.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    MainMenuComponent,
    BreadcrumbsComponent,
    ChangeLocalityComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HoverOverElementDirective,
    LanguagesControlComponent,
    MainMenuComponent,
    BreadcrumbsComponent,
    ChangeLocalityComponent,
  ],
  providers: [],
})
export class SharedModule { }
