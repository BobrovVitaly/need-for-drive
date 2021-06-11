import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LANGUAGES} from '../interfaces/enums';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesControlService {

  private currentLanguage: BehaviorSubject<LANGUAGES> = new BehaviorSubject<LANGUAGES>(LANGUAGES.Rus);

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['ru', 'en']);
    this.translateService.setDefaultLang('ru');
    this.currentLanguage
      .subscribe(language => {
      this.translateService.use(language);
    });
  }

  public setLanguage(language: LANGUAGES): void {
    this.currentLanguage.next(language);
  }

  public getCurrentLanguage(): BehaviorSubject<LANGUAGES> {
    return this.currentLanguage;
  }
}
