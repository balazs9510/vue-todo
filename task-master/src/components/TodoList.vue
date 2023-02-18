<template>
    <h2>My todo list</h2>
    <TodoActions @new-todo-added="newToAdded" />
    <ul v-for="todo in todos">
        <li>
            <TodoItem :todoId="todo.id"></TodoItem>
        </li>
    </ul>
</template>

<script setup lang="ts">
import TodoActions from './TodoActions.vue';
import type { TodoService } from '@/services/todo-service';
import { inject, ref, computed } from 'vue';
import type { ITodo } from '@/models/itodo';
import TodoItem from './TodoItem.vue';

const todoService = inject('todoService') as TodoService;
const todos = ref<ITodo[]>([]);

function newToAdded() {
    todos.value = [];
    todos.value = todoService.getTodos();
}
newToAdded();

</script>

<style scoped>
h2 {
    margin-bottom: 1rem;
}

ul {
    margin: 1rem 0;
    list-style-type: none;
    padding: 0;
}
</style>