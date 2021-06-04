import { Component, OnInit } from '@angular/core';
import {IMenuSectionSlider, ISlider} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.scss']
})
export class MenuSliderComponent implements OnInit {

  public sliders: IMenuSectionSlider[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.sliders = [
      {
        img: 'assets/images/parking.jpg',
        title: 'Бесплатный парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        route: '/parking',
      },
      {
        img: 'assets/images/insurance.jpg',
        title: 'Страховка',
        description: 'Полная страховка страховка автомобиля',
        route: '/insurance',
      },
      {
        img: 'assets/images/petrol.jpg',
        title: 'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт',
        route: '/petrol',
      },
      {
        img: 'assets/images/service.jpg',
        title: 'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО',
        route: '/service',
      }
    ];
  }

}
