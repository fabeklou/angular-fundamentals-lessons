import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on hover(loadPosts); prefetch on idle) {
        <app-posts />
      }
      @placeholder (minimum 1500ms) {
        <p>You don't like it ? Mais c'est la vie !</p>
      }
      @loading (minimum 5s; after 1500ms) {
        <p>Go make yourself a coffee while we are fetching the data...</p>
      }
      @error {
        <p> Sorry, we couldn't load the posts 🥹</p>
      }
    </section>
  `,
})
export class AppComponent {
}
