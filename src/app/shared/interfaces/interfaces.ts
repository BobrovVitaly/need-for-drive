export interface ISection {
  value: string;
  title?: string;
}

export interface IMenuSection {
  title?: string;
  description?: string;
  img?: string;
  route?: string;
}

export interface ISliderState {
  currentValue: number;
  maxValue: number;
}
