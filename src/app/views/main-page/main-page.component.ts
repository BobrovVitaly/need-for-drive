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
    this.sections = [
      {
        value: 'parking',
        title: this.translate.instant('MAIN PAGE.menu sections.parking.title')
      },
      {
        value: 'insurance',
        title: '',
      },
      {
        value: 'petrol',
        title: '',
      },
      {
        value: 'service',
        title: '',
      },
    ];
    this.translate.setDefaultLang('ru');
    this.translate.stream('MAIN PAGE.menu sections').subscribe(sections => {
      this.sections.map(section => {
        section.title = sections[section.value].title;
      });
    });
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
