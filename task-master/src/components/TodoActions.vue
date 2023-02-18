<template>
    <div class="todo-actions-container">
        <input type="text" v-model="todoDescription" class="form-input">
        <button type="button" @click="addTodo">Add new</button>
    </div>
</template>

<script setup lang="ts">
import type { TodoService } from '@/services/todo-service';
import { inject, ref } from 'vue';
const emit = defineEmits(['newTodoAdded']);

const todoDescription = ref('');
const todoService = inject('todoService') as TodoService;

function addTodo() {
    todoService.addTodo({
        id: 0,
        description: todoDescription.value,
        done: false
    });
    todoDescription.value = '';
    emit("newTodoAdded");
}

</script>

<style scoped>
button {
    color: var(--font-color);
    background-color: rgb(39, 172, 72);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    border: unset;
    font-weight: 600;
    cursor: pointer;
}

button:hover {
    background-color: rgb(20, 136, 49);
}

.form-input {
    font-size: 1rem;
    margin-right: 10px;
    padding-inline: 5px;
    height: 30px;
}
</style>