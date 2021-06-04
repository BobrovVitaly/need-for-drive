import { Component, OnInit } from '@angular/core';
import {IMenuSectionSlider, ISlider} from '../../../interfaces/interfaces';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.scss']
})
export class MenuSliderComponent implements OnInit {

  public sliders: IMenuSectionSlider[] | undefined;
  public state: BehaviorSubject<number>;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.state = new BehaviorSubject(0);
    this.sliders = [
      {
        img: 'assets/images/parking.jpg',
        route: 'parking',
      },
      {
        img: 'assets/images/insurance.jpg',
        route: 'insurance',
      },
      {
        img: 'assets/images/petrol.jpg',
        route: 'petrol',
      },
      {
        img: 'assets/images/service.jpg',
        route: 'service',
      }
    ];
    this.translate.setDefaultLang('ru');
    this.translate.stream('MAIN PAGE.menu sections').subscribe(sections => {
      console.log(sections);
      this.sliders.map(slider => {
        slider.title = sections[slider.route].title;
        slider.description = sections[slider.route].description;
      });
    });
  }

  public slideLeft(): void {
    if (this.state.value > 0) {
      this.state.next(this.state.value - 1);
    } else {
      this.state.next(2);
    }
  }

  public slideRight(): void {
    if (this.state.value <= 2) {
      this.state.next(this.state.value + 1);
    }
    else {
      this.state.next(0);
    }
  }

}
