<script setup lang="ts">

const prop = defineProps<{message: string}>()



</script>

<template>
    <div class="toast bg-slate-100 fixed z-9999" id="my_toast_4">
        <div class="alert alert-info flex justify-center fixed z-9999" v-html="message" /> 
    </div>
</template>


<style>
.toast-enter-active,
.toast-leave-active {
    transition: all 2s ease;
}

.toast-enter-from, 
.toast-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.dialog-enter-active,
.dialog-leave-active {
    transition: all 2s ease-in-out;
}

.dialog-enter-from, 
.dialog-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>