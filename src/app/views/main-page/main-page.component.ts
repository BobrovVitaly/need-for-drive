import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {TranslateService} from '@ngx-translate/core';
import {ISection} from '../../interfaces/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public sections: ISection[] | undefined;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('ru');
    this.setSections('ru');
  }

  private setSections(languages: string = 'ru'): void {
    this.translate.use(languages);
    this.translate.get('MENU SECTIONS').subscribe(sections => {
      console.log(sections);
      this.sections = Object.entries(sections).map(section => {
        console.log(section);
        return {
          value: section[0],
          title: section[1] as string,
        };
      });
    });
  }

}
