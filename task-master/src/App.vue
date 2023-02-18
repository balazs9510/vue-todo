<script setup lang="ts">
import TodoList from './components/TodoList.vue';
</script>

<template>
  <header>
    <h1><i class="fa-solid fa-check-to-slot"></i> Task Master</h1>

  </header>
  <main>
    <TodoList />
  </main>
  <footer>
    <p>Footer</p>
  </footer>
</template>

<style scoped></style>
