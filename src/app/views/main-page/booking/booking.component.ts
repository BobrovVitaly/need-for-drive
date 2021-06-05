import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('ru');
  }

}
