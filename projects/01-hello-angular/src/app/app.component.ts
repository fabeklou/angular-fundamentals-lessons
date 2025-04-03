import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <h2> Favorite Books: </h2>
    <ol>
    @for (book of books; track book) {
      <li> {{ book }} </li>
    }
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})

export class AppComponent {
  books = [
    'Think and Grow Rich',
    'Wiser than the devil',
    'From the Trashman to the Cash Man']

    userName = 'codingChamp'
}
