<template>
    <input type="checkbox" v-model="todo.done" :name="todoDoneString()" :id="todoDoneString()">
    <label :for="todoDoneString()">{{ todo.description }}</label>
</template>

<script setup lang="ts">
import type { ITodo } from '@/models/itodo';
import type { TodoService } from '@/services/todo-service';
import { computed, inject, ref } from 'vue';


const props = defineProps(['todoId']);
const todoService = inject<TodoService>('todoService');

const todo = computed<ITodo>(() => {
    return todoService?.getTodo(props.todoId)!;
})

const todoDoneString = () => {
    return "done-" + todo.value.id;
}

</script>

<style scoped>
input {
    margin-right: 10px;
}

input:checked{
    accent-color: var(--btn-color);

}
</style>