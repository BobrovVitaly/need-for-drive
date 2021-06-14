import { Injectable } from '@angular/core';
import {ISliderState} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SlidersControlService {

  public slideLeft(state: ISliderState): void {
    if (state.currentValue > 0) {
      state.currentValue--;
    } else {
      state.currentValue = 3;
    }
  }

  public slideRight(state: ISliderState): void {
    if (state.currentValue < state.maxValue) {
      state.currentValue++;
    } else {
      state.currentValue = 0;
    }
  }
}
