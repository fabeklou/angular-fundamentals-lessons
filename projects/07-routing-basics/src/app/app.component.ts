import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Enable routing to see the greeting below</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = '07-routing-basics';
}
