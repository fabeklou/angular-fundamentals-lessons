import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, todoList } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <ul>
    @for (todo of todos(); track todo.id) {
      <li>
        <label>
          <span [ngStyle]="{
            'font-weight': todo.completed ? '300' : '900',
            'text-decoration': todo.completed ? 'line-through' : '',
            'color': todo.completed ? 'green' : 'red'
          }">
            {{ todo.title }}
          </span>:
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="updateTodo(todo)"
          />
        </label>
      </li>
    }
    </ul>
    <h3>totoal completed task: {{ completedTasks() }}</h3>
    `,
  styles: `
    label {
      display: block
    }
    `,
})
export class AppComponent {
  constructor() {
    effect(() => {
      console.log(`You have ${this.todos().length} tasks to do, and ${this.completedTasks()} completed.`);
    })
  }

  todos = signal<Todo[]>(todoList);

  completedTasks = computed<number>(() => {
    return this.todos().reduce((acc, todo) => acc + Number(todo.completed), 0);
  });

  updateTodo(todo: Todo) {
    this.todos.update((todoList) => {
      return todoList.map((todoEntry) => {
        if (todoEntry.id === todo.id) {
          todoEntry.completed = !todoEntry.completed;
        }
        return todoEntry;
      })
    })
  }
}
