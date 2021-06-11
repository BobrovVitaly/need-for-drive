import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMenuSection, ISliderState} from '../../../shared/interfaces/interfaces';
import {MenuSectionsControlService} from '../../../shared/services/menu-sections-control.service';
import {SlidersControlService} from '../../../shared/services/sliders-control.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() slider: IMenuSection;
  @Output() slideLeftEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() slideRightEmitter: EventEmitter<any> = new EventEmitter<any>();

  public slideLeft(): void {
    this.slideLeftEmitter.emit();
  }

  public slideRight(): void {
    this.slideRightEmitter.emit();
  }
}
