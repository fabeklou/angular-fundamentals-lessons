import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car.type';


@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{ carData.make + ' ' + carData.model }}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{ carData.year }}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{ carData.transmission }}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{ carData.miles }}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>{{ carData.price }}</span>
          </p>
          <button (click)="handleCarSaved(carData)">Save / Remove - Car</button>
        </section>
      </article>
  `,
  styles: `
    button {
      padding: 0.2rem 1rem;
      border: none;
      margin-top: 1rem;
    }

    button:hover {
      background-color: cyan;
    }
  `,
})
export class ListingComponent {
  @Input({ required: true })
  carData!: Car;

  @Output()
  saveCarEvent = new EventEmitter<Car>();

  handleCarSaved (carToSave: Car) {
    this.saveCarEvent.emit(carToSave);
  }
}
