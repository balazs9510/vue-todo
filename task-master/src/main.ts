import { TodoService } from './services/todo-service';
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App);
app.provide("todoService", new TodoService())


function openModal(modalId: string) {
    let modal = document.getElementById(modalId);
    console.log(modalId);
    
    modal?.classList.add("opened");
}

function closeModal(modalId: string) {
    let modal = document.getElementById(modalId);
    modal?.classList.remove("opened");

}

app.provide("openModal", openModal);
app.provide("closeModal", closeModal);

app.mount('#app');