import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./modules/booking-page/booking-page.module').then((m) => m.BookingPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
