import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LANGUAGES} from '../interfaces/enums';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesControlService {

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['ru', 'en']);
    this.translateService.setDefaultLang('ru');
    this.currentLanguage.subscribe(language => {
      console.log(language);
      this.translateService.use(language);
    });
  }

  private currentLanguage: BehaviorSubject<LANGUAGES> = new BehaviorSubject<LANGUAGES>(LANGUAGES.Rus);

  public setLanguage(language: LANGUAGES): void {
    this.currentLanguage.next(language);
  }

  public getCurrentLanguage(): BehaviorSubject<LANGUAGES> {
    return this.currentLanguage;
  }
}
