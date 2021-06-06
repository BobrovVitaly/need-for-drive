import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ISection} from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sections: ISection[] | undefined;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('ru');
    this.sections = [
      {
        value: 'parking',
        title: '',
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
}
