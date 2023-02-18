import type { ITodo } from "@/models/itodo";

export class TodoService {
    todos: ITodo[] = [{
        id: 0,
        description: "My first todo",
        done: true
    },
    {
        id: 1,
        description: "My second todo",
        done: false
    }];

    idIncement = 2;

    getTodos(): ITodo[] {
        return this.todos;
    }

    addTodo(todo: ITodo): void {
        todo.id = this.idIncement++;

        this.todos.push(todo);
    }

    getTodo(id: number): ITodo | null {
        return this.todos.find(x => x.id == id) ?? null;
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(x => x.id != id);
    }
}