import { TodoService } from './services/todo-service';
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App);
app.provide("todoService", new TodoService())

app.mount('#app');

