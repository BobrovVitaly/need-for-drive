import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IMenuSection, ISliderState} from '../../shared/interfaces/interfaces';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public sliders: IMenuSection[] | undefined;
  public sliderState: ISliderState;

  constructor(private translate: TranslateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sliderState = {
      currentValue: 0,
      maxValue: 4
    };
  }

  public navigateToBooking(): void {
    this.router.navigate(['booking']).then();
  }
}
