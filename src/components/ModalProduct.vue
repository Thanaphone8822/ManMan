<script setup lang="ts">
import { computed, ref } from 'vue';
import Toast from './Toast.vue';
import { useCartStore } from '@/stores/cart';
import dataSrc from '../data/dataSrc.json'
import type { Product } from '@/stores/product';



const ItemData = defineModel<Product>("setItem")


const { itemCount, removeFromCart, isExist, totalPrice, cart, addToCart } = useCartStore();




const messageVisible = ref(false);
const message = ref('');

function openModal() {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement
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
    <Transition name="toast">
        <Toast v-if="messageVisible" :message />
    </Transition>

    <dialog  id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <div class="flex flex-col">
                <h3 class="text-lg font-bold">{{ ItemData?.title }}</h3>
                <img class="object-contain h-[500px]" :src="ItemData?.image" alt="">
            </div>
            <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugiat!</p>
            <div class="modal-action">

                <form method="dialog">
                    <button @click="addToCart(ItemData)" :disabled="isExist(ItemData)" class="btn btn-primary w-40 mr-5">Buy
                        Now</button>
                    <!-- if there is a button, it will close the modal -->
                    <button @click="cancelPayment()" class="btn w-40">Cancel</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<style scoped></style>