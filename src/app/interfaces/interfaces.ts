export interface ISection {
  value: string;
  title?: string;
}

export interface ILanguage {
  value: string;
  title: string;
}

export interface ISlider {
  img: string;
  route?: string;
}

export interface IMenuSectionSlider extends ISlider {
  title?: string;
  description?: string;
}
