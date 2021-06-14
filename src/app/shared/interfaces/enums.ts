import {IEmitIcon, IMenuSection} from './interfaces';

export enum LANGUAGES {
  Rus = 'ru',
  Eng = 'en',
}

export const MENUSECTIONS: IMenuSection[] = [
  {
    img: 'url(assets/images/parking.jpg)',
    route: 'parking',
  },
  {
    img: 'url(assets/images/insurance.jpg)',
    route: 'insurance',
  },
  {
    img: 'url(assets/images/petrol.jpg)',
    route: 'petrol',
  },
  {
    img: 'url(assets/images/service.jpg)',
    route: 'service',
  }
];

export const EMITICONS: IEmitIcon[] = [
  {
    title: 'telegram',
    src: 'assets/icons/telegram-white-icon.svg'
  },
  {
    title: 'facebook',
    src: 'assets/icons/facebook-white-icon.svg'
  },
  {
    title: 'instagram',
    src: 'assets/icons/instagram-white-icon.svg'
  }
];
