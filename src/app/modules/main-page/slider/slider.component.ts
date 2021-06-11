import {Component, Input, OnInit} from '@angular/core';
import {IMenuSection, ISliderState} from '../../../shared/interfaces/interfaces';
import {MenuSectionsControlService} from '../../../shared/services/menu-sections-control.service';
import {SlidersControlService} from '../../../shared/services/sliders-control.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() state: ISliderState;

  public sliders: IMenuSection[] | undefined;

  constructor(private menuSectionsControlService: MenuSectionsControlService,
              private slidersControlService: SlidersControlService) {
  }

  ngOnInit(): void {
    this.sliders = this.menuSectionsControlService.getMenuSections();
  }


  public slideRight(): void {
    this.slidersControlService.slideRight(this.state);
  }

  public slideLeft(): void {
    this.slidersControlService.slideLeft(this.state);
  }
}
