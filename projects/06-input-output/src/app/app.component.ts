import { Component } from '@angular/core';
import { ListingComponent } from './listing/listing.component';
import { Car } from './car.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for (carData of carList; track carData) {
        <app-listing
          [carData]="carData"
          (saveCarEvent)="addCarToSaved($event)" />
      }
      <!-- end car listing markup -->
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];

  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1_000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100_000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100_000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22_330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved (carToSave: Car) {
    /** Make sure car has not been saved already */
    let indexOfCarToAdd = this.savedCarList.indexOf(carToSave);

    if (indexOfCarToAdd === -1) {
      this.savedCarList.push(carToSave);
    }
    else {
      this.savedCarList.splice(indexOfCarToAdd, 1);
    }
  }
}
