import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ILocationGroup} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-change-locality',
  templateUrl: './change-locality.component.html',
  styleUrls: ['./change-locality.component.scss']
})
export class ChangeLocalityComponent implements OnInit {

  form: FormGroup;
  citiesGroups: ILocationGroup[];
  stateGroupOptions: Observable<ILocationGroup[]>;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      citiesGroup: '',
    });
    this.citiesGroups = [{
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
    }, {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut']
    }, {
      letter: 'D',
      names: ['Delaware']
    }, {
      letter: 'F',
      names: ['Florida']
    }, {
      letter: 'G',
      names: ['Georgia']
    }, {
      letter: 'H',
      names: ['Hawaii']
    }, {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
    }, {
      letter: 'K',
      names: ['Kansas', 'Kentucky']
    }, {
      letter: 'L',
      names: ['Louisiana']
    }, {
      letter: 'M',
      names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
        'Minnesota', 'Mississippi', 'Missouri', 'Montana']
    }, {
      letter: 'N',
      names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota']
    }, {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon']
    }, {
      letter: 'P',
      names: ['Pennsylvania']
    }, {
      letter: 'R',
      names: ['Rhode Island']
    }, {
      letter: 'S',
      names: ['South Carolina', 'South Dakota']
    }, {
      letter: 'T',
      names: ['Tennessee', 'Texas']
    }, {
      letter: 'U',
      names: ['Utah']
    }, {
      letter: 'V',
      names: ['Vermont', 'Virginia']
    }, {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }];
    this.stateGroupOptions = this.form.get('citiesGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterGroup(value))
      );
  }

  private filterGroup(value: string): ILocationGroup[] {
    if (value) {
      return this.citiesGroups
        .map(group => ({letter: group.letter, names: this.filterCitiesByName(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.citiesGroups;
  }

  private filterCitiesByName(opt: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

}
