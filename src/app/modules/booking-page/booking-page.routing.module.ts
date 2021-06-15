import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingPageComponent} from './booking-page.component';
import {LocationSelectionComponent} from './location-selection/location-selection.component';
import {ModelSelectionComponent} from './model-selection/model-selection.component';
import {SelectionOfAdditionalParametersComponent} from './selection-of-additional-parameters/selection-of-additional-parameters.component';
import {OrderResultComponent} from './order-result/order-result.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPageComponent,
    children: [
      {
        path: 'location',
        component: LocationSelectionComponent,
        data: {
          breadcrumb: 'Местоположение'
        }
      },
      {
        path: 'model',
        component: ModelSelectionComponent,
        data: {
          breadcrumb: 'Модель'
        }
      },
      {
        path: 'additionalParameters',
        component: SelectionOfAdditionalParametersComponent,
        data: {
          breadcrumb: 'Дополнительно'
        }
      },
      {
        path: 'result',
        component: OrderResultComponent,
        data: {
          breadcrumb: 'Итог'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
