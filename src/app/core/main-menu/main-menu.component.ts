import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {IEmitIcon, IMenuSection} from '../../shared/interfaces/interfaces';
import {TranslateService} from '@ngx-translate/core';
import {MenuSectionsControlService} from '../../shared/services/menu-sections-control.service';
import {EMITICONS} from '../../shared/interfaces/enums';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() openMenuEmitter: EventEmitter<void> = new EventEmitter<void>();
  public sections: IMenuSection[];
  public emitIcons: IEmitIcon[] = EMITICONS;

  constructor(public translate: TranslateService,
              private menuSectionsControlService: MenuSectionsControlService) {
  }

  ngOnInit(): void {
    this.translate.addLangs(['ru', 'en']);
    this.translate.setDefaultLang('ru');
    this.sections = this.menuSectionsControlService.getMenuSections();
  }

  sidenavToggle(): void {
    this.openMenuEmitter.emit();
  }
}
