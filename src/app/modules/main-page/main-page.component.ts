import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IMenuSectionSlider} from '../../shared/interfaces/interfaces';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

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
      this.state.next(3);
    }
  }

  public slideRight(): void {
    if (this.state.value < 3) {
      this.state.next(this.state.value + 1);
    }
    else {
      this.state.next(0);
    }
  }
}
