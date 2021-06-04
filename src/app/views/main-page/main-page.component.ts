import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {TranslateService} from '@ngx-translate/core';
import {ILanguage, ISection, ISlider} from '../../interfaces/interfaces';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public sections: ISection[] | undefined;
  public currentLanguage: BehaviorSubject<ILanguage> = new BehaviorSubject<ILanguage>({
    value: 'ru',
    title: 'rus'
  });

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('ru');
    this.currentLanguage.subscribe(language => {
      this.setSections(language.value);
    }, error => console.log(error));
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

  private setSections(language: string = 'ru'): void {
    this.translate.use(language);
    this.translate.get('MAIN PAGE.MENU SECTIONS').subscribe(sections => {
      this.sections = Object.entries(sections).map(section => {
        return {
          value: section[0],
          title: section[1] as string,
        };
      });
    });
  }
}
