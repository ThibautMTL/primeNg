import { Component } from '@angular/core';

interface City {
  label: string,
  value: string
}

@Component({
  selector: 'primeng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'prime';

  valueKnob = 50;

  cities: City[] = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];

  citySelect?: City;

  displaySelect(city: City | Date) {
    console.log(city);
  }
}
