<template>
    <div class="todo-actions-container">
        <button type="button" @click="addTodo">Add new</button>
    </div>
</template>

<script setup lang="ts">
import type { TodoService } from '@/services/todo-service';
import { inject, reactive, ref } from 'vue';
const emit = defineEmits(['newTodoAdded']);

const todoDescription = ref('');
const todoService = inject('todoService') as TodoService;
const formClass = reactive({
    'invalid': false,
    'is-diry': false
});
function addTodo() {
    validateInput();
    if (formClass['invalid']) return;
    todoService.addTodo({
        id: 0,
        description: todoDescription.value,
        done: false
    });
    todoDescription.value = '';
    emit("newTodoAdded");
}

function validateInput() {
    formClass['invalid'] = todoDescription.value == '';
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
    border-radius: 5px;
}

.todo-actions-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}

</style>