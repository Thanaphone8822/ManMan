<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import InputNumber from './InputNumber.vue';
import { useProductStore, type Product } from '@/stores/product';
const { cart, removeFromCart, totalPrice, isViewCart, viewQuantity } = useCartStore();

const {openModal} = useProductStore()


</script>

<template>
    <div>


        <div class="space-y-2 overflow-y-auto h-[600px]">
            <template v-for="product in cart">
                <div class="bg-slate-100 shadow-2xl rounded-lg overflow-hidden border-solid border-2px border-gray-400">

                    <div class="flex flex-col gap-2 p-4 m-auto">
                        <img @click="openModal(product)" :src="product.image" alt="">
                        <h3 class="text-2xl font-medium text-gray-800">{{ product.title }}</h3>

                        <div class="flex gap-1 text-xl">
                            <span class="text-gray-800 font-bold">${{ product.price }}</span>
                            <span> x </span>
                            <span class="text-gray-800 font-bold">{{ viewQuantity(product) }}</span>
                        </div>

                        <div class="flex gap-2 mt-4 flex-row-reverse">
                            <button @click="removeFromCart(product)" class="btn btn-primary w-[100px] hover:bg-red-600">
                                Remove
                            </button>
                            <div>
                                <InputNumber :item="product" class=" w-fit flex" />
                            </div>
                            <!-- <input v-model="product.quantity" type="number" placeholder="Quantity"
                                class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950"> -->

                        </div>

                        <div>Your Cart Items: {{ cart.length }}</div>
                        <h3 class="text-xl font-medium text-gray-800">${{ product.price * product.quantity }}</h3>

                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
