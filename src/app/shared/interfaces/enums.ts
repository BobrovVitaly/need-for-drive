import {IMenuSection} from './interfaces';

export enum LANGUAGES {
  Rus = 'ru',
  Eng = 'en',
}

export const MENUSECTIONS: IMenuSection[] = [
  {
    img: 'assets/images/parking.jpg',
    route: 'parking',
  },
  {
    img: 'assets/images/insurance.jpg',
    route: 'insurance',
  },
  {
    img: 'assets/images/petrol.jpg',
    route: 'petrol',
  },
  {
    img: 'assets/images/service.jpg',
    route: 'service',
  }
];
