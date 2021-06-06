import {NgModule} from '@angular/core';
import {MainMenuComponent} from '../main-menu/main-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  exports: [
    MainMenuComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
  ],
  providers: [],
})
export class LayoutModule { }
