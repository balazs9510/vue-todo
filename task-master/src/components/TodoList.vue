<template>
    <div class="todo-list-wrapper">
        <h2>My todo list</h2>
        <TodoActions @new-todo-added="refreshTodos" />

        <p class="italic">You only have {{ todos.length }} todo(s) left.</p>

        <ul v-for="todo in todos">
            <li>
                <TodoItem :todo="todo" @on-todo-deleted="removeTodo" :key="todo.id" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import TodoActions from './TodoActions.vue';
import Modal from './modal/Modal.vue';
import type { TodoService } from '@/services/todo-service';
import { inject, ref, computed, watch } from 'vue';
import TodoItem from './TodoItem.vue';
import type { ITodo } from '@/models/itodo';

const todoService = inject('todoService') as TodoService;
const todos = ref<ITodo[]>(todoService.getTodos());

function refreshTodos() {
    todos.value = [];
    todos.value = todoService.getTodos();
    console.log(todos.value);
}

function removeTodo(todoId: number) {
    console.log(todoId);
    todoService.removeTodo(todoId);
    refreshTodos();
}

</script>

<style scoped>
.todo-list-wrapper {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.todo-list-wrapper ul {
    list-style-type: none;
}
</style>