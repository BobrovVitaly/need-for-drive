import { Injectable } from '@angular/core';
import {ISliderState} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SlidersControlService {

  constructor() { }

  public slideLeft(state: ISliderState): void {
    if (state.currentValue > 0) {
      state.currentValue --;
    } else {
      state.currentValue = 3;
    }
  }

  public slideRight(state: ISliderState): void {
    if (state.currentValue < 3) {
      state.currentValue ++;
    } else {
      state.currentValue = 0;
    }
  }
}
