import {Component, OnInit} from '@angular/core';
import {LanguagesControlService} from '../../services/languages-control.service';
import {LANGUAGES} from '../../interfaces/enums';

@Component({
  selector: 'app-languages-control',
  templateUrl: './languages-control.component.html',
  styleUrls: ['./languages-control.component.scss']
})
export class LanguagesControlComponent implements OnInit {

  public currentLanguage: LANGUAGES;

  constructor(private languagesControlService: LanguagesControlService) {
  }

  ngOnInit(): void {
    this.languagesControlService.getCurrentLanguage().subscribe(language => {
      this.currentLanguage = language;
      console.log(this.currentLanguage);
    });
  }

  public get LANGUAGES(): typeof LANGUAGES {
    return LANGUAGES;
  }

  public setLanguage(language: LANGUAGES): void {
    this.languagesControlService.setLanguage(language);
  }
}
