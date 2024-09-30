<script setup lang="ts">
import Cc from '@/components/cc.vue';

import { useCartStore } from '@/stores/cart';
import Toast from '@/components/Toast.vue';
import ModalPage from '@/components/ModalPage.vue';


const { itemCount, removeFromCart, isExist, totalPrice } = useCartStore();



function showToast() {
    const toast = document.getElementById('my_toast_4') as HTMLDialogElement
    toast.classList.add('toast-open')
    setTimeout(() => {
        toast.classList.remove('toast-open')
    }, 300)
}


function openModal(): boolean {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement
    modal.showModal()
    return false
}




</script>


<template>
    <div class="flex">

        <div class="w-1/2">

            <div v-if="itemCount() == 0" class="bg-slate-100 h-screen flex justify-center ">
                <span class="m-auto text-5xl">Your Cart is empty!!!</span>
            </div>
            <div v-else class="bg-slate-100 h-screen">
                <Cc />
                <div class=" flex w-ful justify-center text-3xl">
                    <span>Total Price:  {{ totalPrice() }}</span>
                </div>
                <div>
                    <button @click="openModal()" class="btn btn-primary btn-block mt-10">Submit</button>
                    <ModalPage />
                </div>
            </div>
        </div>
        <div class="w-1/2">
            <div class="bg-slate-100 h-screen flex flex-col content-center justify-center">
                <div>
                    <h1 class="text-5xl font-bold content-start">Payment</h1>
                </div>
                <div class="flex flex-col bg-white w-[500px] p-5 m-auto rounded-lg">
                    <div>
                        <input type="text" placeholder="First Name"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">
                        <input type="text" placeholder="Last Name"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">
                        <input type="text" placeholder="Phone Number"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">
                        <input type="text" placeholder="Address"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">
                        <input type="text" placeholder="Postcode"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">
                        <div class="flex justify-center mt-10">
                            <img class="w-[50px] h-[50px] object-cover ml-5"
                                src="https://i.pinimg.com/564x/20/13/94/2013943e8598d750da10aa05c6052efd.jpg" alt="">
                            <img class="w-[50px] h-[50px] object-cover ml-5"
                                src="https://i.pinimg.com/564x/7c/81/52/7c8152cb8959cd0155c5f8d6cc3c7cd6.jpg" alt="">
                            <img class="w-[50px] h-[50px] object-cover ml-5"
                                src="https://i.pinimg.com/564x/3a/df/e1/3adfe125d0d35d673def7a345120946a.jpg" alt="">
                            <img class="w-[50px] h-[50px] object-cover ml-5"
                                src="https://i.pinimg.com/564x/4a/e6/2b/4ae62b0cdee9815e3ad4fe19d4dc8b7a.jpg" alt="">
                            <img class="w-[50px] h-[50px] object-cover ml-5"
                                src="https://i.pinimg.com/564x/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg" alt="">
                        </div>
                        <input type="text" placeholder="Cradit Card Number"
                            class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950">

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>


<style scoped></style>