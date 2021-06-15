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

export interface ILocationGroup {
  letter: string;
  names: string[];
}

export interface IBreadCrumb {
  label: string;
  url: string;
}
