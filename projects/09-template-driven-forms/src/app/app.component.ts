import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input id="title" type="text" [(ngModel)]="postTitle"/>

        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea id="body" [(ngModel)]="postBody"></textarea>
      </section>
      <section>
        <p>Display title: {{ postTitle }}</p>
        <p>Display value: {{ postBody }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';

  postTitle = "default title"
  postBody = "write something here"
}
