import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <!-- Navigation -->
    <!-- <ul>
      <li> <a routerLink=""> Home </a></li>
      <li> <a routerLink='/details'> Details </a></li>
    </ul> -->

    <h1>Welcome to {{ title }}!</h1>
    <button (click)="goHome()">⬅️ Go Home</button>
    <br /> <br /> <hr /> <br />

    <ul>
    @for ( productTitle of productTitles; track productTitle) {
      <li>
        <!-- <a
        [routerLink]="'details/' + $index">
          {{ productTitle }}
        </a> -->
        <a
        [routerLink]="['details', $index]">
          {{ productTitle }}
        </a>
      </li>
    }
    </ul>

    <router-outlet />
  `,
  styles: `
    ul {
      display: flex;
      gap: 2rem;
      list-style-type: none;
    }

    li {
      cursor: pointer;
    }
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];

  router = new Router()

  goHome() {
    this.router.navigateByUrl('');
  }
}
