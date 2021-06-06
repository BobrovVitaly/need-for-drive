import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ISection} from '../../shared/interfaces/interfaces';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() openMenuEmitter: EventEmitter<any> = new EventEmitter<any>();
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

  sidenavToggle(): void {
    this.openMenuEmitter.emit();
  }
}
