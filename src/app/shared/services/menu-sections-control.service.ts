import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IMenuSection} from '../interfaces/interfaces';
import {MENUSECTIONS} from '../interfaces/enums';

@Injectable({
  providedIn: 'root'
})
export class MenuSectionsControlService {

  private menuSections: IMenuSection[] = MENUSECTIONS;

  constructor(private translateService: TranslateService) {
    this.translateService.stream('MAIN PAGE.menu sections').subscribe(sections => {
      this.menuSections.map(menuSection => {
        menuSection.title = sections[menuSection.route].title;
        menuSection.description = sections[menuSection.route].description;
      });
    });
  }

  public getMenuSections(): IMenuSection[] {
    return this.menuSections;
  }
}
