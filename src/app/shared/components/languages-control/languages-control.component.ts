import {Component, OnInit} from '@angular/core';
import {LanguagesControlService} from '../../services/languages-control.service';
import {LANGUAGES} from '../../interfaces/enums';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-languages-control',
  templateUrl: './languages-control.component.html',
  styleUrls: ['./languages-control.component.scss']
})
export class LanguagesControlComponent {

  public currentLanguage: LANGUAGES;

  constructor(public languagesControlService: LanguagesControlService) {
  }

  public get LANGUAGES(): typeof LANGUAGES {
    return LANGUAGES;
  }

  public setLanguage(language: LANGUAGES): void {
    this.languagesControlService.setLanguage(language);
  }

  public getLanguage(): BehaviorSubject<LANGUAGES> {
    return this.languagesControlService.getCurrentLanguage();
  }
}
