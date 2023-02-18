<template>
    <div class="modal" :class="modalClass">
        <div class="modal-backdrop"></div>
        <div class="modal-body">
            <div class="modal-header">
                <h2>
                    <slot name=header> Modal header </slot>
                </h2>
                <span class="close" @click="modalClass.opened = false"></span>
            </div>
            <div class="modal-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const modalClass = reactive({
    opened: false
});

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    z-index: 1000;
}
.modal.opened{
    display: flex;
}
.modal-backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    opacity: 0.5;
}

.modal-body {
    z-index: 1;
    background-color: var(--bg-color);
    position: relative;
    width: 500px;
    height: 200px;
    border-radius: 10px;
    top: 10%;
    box-shadow: 0px 3px 10px 0px rgba(82, 80, 80, 0.2)
}

.modal-header {
    display: flex;
    place-content: center;
    padding: 1rem;
}

.close {
    position: absolute;
    right: 10px;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    font-weight: 800;
}

.close::before {
    content: 'x';
}


</style>