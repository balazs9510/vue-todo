<template>
    <div class="todo-actions-container">
        <button type="button" @click="modalOpen(modalId)">Add new</button>
    </div>

    <Modal :id="modalId">
        <template v-slot:header>
            Add new todo
        </template>
        <template v-slot:content>
            <form action="javascript:void(0);">
                <div class="form-group">
                    <label for="title">Title *</label>
                    <input type="text" class="form-input" id="title" v-model="model.title" placeholder="Todo title"
                        @change="validateInput">
                    <span :class="{ invalid: !modelValidation.isTitleValid }" class="italic"> Title must be provided.</span>
                </div>
                <div class="form-group">
                    <label for="Description">Description</label>
                    <textarea class="form-input" id="Description" v-model="model.description" placeholder="Todo description"
                        rows="3" @change="validateInput" />

                </div>

                <div class="form-group">
                    <label for="category">Category</label>
                    <select name="category" id="category" v-model="model.category" class="form-input">
                        <option>Home</option>
                        <option>Money</option>
                        <option>Work</option>
                        <option>Family</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="dueDate">Due date</label>
                    <input type="datetime-local" name="dueDate" id="dueDate" v-model="model.due" class="form-input">
                </div>
                <div class="form-group">
                    <button type="submit" @click="submit">Save</button>
                </div>
            </form>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import Modal from './modal/Modal.vue';
import type { TodoService } from '@/services/todo-service';
import { inject, reactive, ref } from 'vue';
import type { ITodo } from '@/models/itodo';
const emit = defineEmits(['newTodoAdded']);
const todoDescription = ref('');
const todoService = inject('todoService') as TodoService;
const modalOpen = inject('openModal') as Function;
const closeModal = inject('closeModal') as Function;


const defaultModel = {
    category: '',
    description: '',
    done: false,
    due: new Date(),
    id: 0,
    title: ''
};
let model = reactive<ITodo>(defaultModel)

const modalId = "createTodoModal";

const modelValidation = reactive({
    isTitleValid: true,
});

function submit() {
    if (!validateInput()) {
        return;
    }
    todoService.addTodo(model);
    model = reactive({
        category: '',
        description: '',
        done: false,
        due: new Date(),
        id: 0,
        title: ''
    });
    emit("newTodoAdded");
    closeModal(modalId);
}



function validateInput() {
    if (!model.title) {
        modelValidation.isTitleValid = false;
        return false;
    }
    return true;
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

.form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}

.form-group label {
    display: block;
}

.form-input {
    font-size: 1rem;
    margin-right: 10px;
    padding-inline: 10px;
    height: 35px;
    border-radius: 5px;
    width: 100%;
    font-family: inherit
}

textarea.form-input {
    height: auto;
}

.form-input:focus {
    outline: 1px solid var(--btn-color);
}

.todo-actions-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}

.form-group span {
    display: none;
}

.form-group span.invalid {
    display: block;
    color: var(--error-color);
    font-weight: 800;
}
</style>