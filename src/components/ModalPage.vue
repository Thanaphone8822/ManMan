<script setup lang="ts">
import { ref } from 'vue';
import Toast from './Toast.vue';


const messageVisible = ref(false);
const message = ref('');

function openModal() {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement
    modal.showModal()

}

function showToast() {
    messageVisible.value = true
    
    setTimeout(() => {
        messageVisible.value = false
    }, 3000)
}

const submitPayment = () => {
    message.value = `<span class="p-2 bg-white rounded-full text-green-500" >Success!</span>`
    showToast()
}

const cancelPayment = () => {
    message.value = `<span class="p-2 bg-white rounded-full text-red-500" >Canceled!</span>`
    showToast()
}


</script>


<template>
    <Transition name="toast" >
        <Toast v-if="messageVisible" :message />
    </Transition>

    <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="text-lg font-bold">Bro!</h3>
            <p class="py-4">Are you sure to pay for this product</p>
            <div class="modal-action">

                <form method="dialog">
                    <button @click="submitPayment()" class="btn btn-primary w-40">Yes</button>
                    <!-- if there is a button, it will close the modal -->
                    <button @click="cancelPayment()" class="btn w-40">Cancel</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<style scoped></style>