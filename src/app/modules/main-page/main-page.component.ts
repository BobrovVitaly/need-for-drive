import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IMenuSection, ISliderState} from '../../shared/interfaces/interfaces';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {MenuSectionsControlService} from '../../shared/services/menu-sections-control.service';
import {SlidersControlService} from '../../shared/services/sliders-control.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public sliders: IMenuSection[];
  public sliderState: ISliderState;

  constructor(private menuSectionsControlService: MenuSectionsControlService,
              private slidersControlService: SlidersControlService,
              private translate: TranslateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sliders = this.menuSectionsControlService.getMenuSections();
    this.sliderState = {
      currentValue: 0,
      maxValue: 3
    };
  }

  public slideRight(): void {
    this.slidersControlService.slideRight(this.sliderState);
  }

  public slideLeft(): void {
    this.slidersControlService.slideLeft(this.sliderState);
  }

  public navigateToBooking(): void {
    this.router.navigate(['booking']);
  }
}
