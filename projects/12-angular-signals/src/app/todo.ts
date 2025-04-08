export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoList = [
  {
    id: 1,
    title: "Learn Angular",
    completed: false,
  },
  {
    id: 2,
    title: "Learn TypeScript",
    completed: true,
  },
  {
    id: 3,
    title: "Learn RxJS",
    completed: false,
  },
]
