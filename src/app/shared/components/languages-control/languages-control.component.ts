import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ILanguage} from '../../interfaces/interfaces';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-languages-control',
  templateUrl: './languages-control.component.html',
  styleUrls: ['./languages-control.component.scss']
})
export class LanguagesControlComponent implements OnInit {

  public currentLanguage: BehaviorSubject<ILanguage> = new BehaviorSubject<ILanguage>({
    value: 'ru',
    title: 'rus'
  });

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('ru');
    this.currentLanguage.subscribe(language => {
      this.translate.use(language.value);
    });
  }

  public setLanguage(languageValue: string = 'ru'): void {
    switch (languageValue) {
      case 'ru': {
        this.currentLanguage.next({
          value: 'ru',
          title: 'Rus'
        });
        break;
      }
      case 'en': {
        this.currentLanguage.next({
          value: 'en',
          title: 'Eng'
        });
        break;
      }
    }
  }

}
