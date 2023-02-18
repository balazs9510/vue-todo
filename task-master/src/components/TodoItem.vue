<template>
    <div class="todo-item-wrapper">
        <input type="checkbox" class="checkbox" v-model="todo.done" :name="todoDoneString()" :id="todoDoneString()">
        <label :for="todoDoneString()" :class="{ done: todo.done }">{{ todo.description }}</label>
        <i class="fa-solid fa-pencil"></i> |
        <i class="fa-solid fa-trash" @click="$emit('onTodoDeleted', todo.id)"></i>
    </div>
</template>

<script setup lang="ts">
import type { ITodo } from '@/models/itodo';
import { ref } from 'vue';

defineEmits(["onTodoDeleted"])

const props = defineProps(['todo']);
const todo = ref<ITodo>(props.todo)

const todoDoneString = () => {
    return "done-" + todo.value.id;
}

</script>

<style scoped>
input:checked {
    accent-color: var(--btn-color);
}

.todo-item-wrapper {
    border-radius: 5px;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    gap: 1rem;
}

.todo-item-wrapper:hover {
    opacity: .85;
}

.todo-item-wrapper label {
    flex-grow: 1;
}

.checkbox {
    width: 1rem;
    height: 1rem;
}

.done {
    text-decoration: line-through solid var(--btn-color) 3px;

}
</style>