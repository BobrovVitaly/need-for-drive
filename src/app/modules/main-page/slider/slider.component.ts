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
  @Output() slideLeftEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() slideRightEmitter: EventEmitter<void> = new EventEmitter<void>();

  public slideLeft(): void {
    this.slideLeftEmitter.emit();
  }

  public slideRight(): void {
    this.slideRightEmitter.emit();
  }
}
