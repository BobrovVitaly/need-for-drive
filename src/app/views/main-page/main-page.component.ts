import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public sections: string[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.sections = ['parking', 'insurance', 'petrol', 'service'];
  }

}
