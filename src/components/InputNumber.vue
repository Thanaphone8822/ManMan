<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
const props = defineProps<{ item: any }>()
const { IncreaseQuantity, decreaseQuantity, viewQuantity, itemCount } = useCartStore();

</script>


<template>

    <form class="max-w-xs mx-auto">
        <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <div class="relative flex items-center max-w-[8rem]">
            <button @click="decreaseQuantity(item)" type="button" data-input-counter-decrement="quantity-input"
                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h16" />
                </svg>
            </button>
            <input v-model="item.quantity" type="text" data-input-counter data-input-counter-min="1"
                data-input-counter-max="50" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="999" required />
            <button @click="IncreaseQuantity(item)" type="button" data-input-counter-increment="quantity-input"
                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                </svg>
            </button>
        </div>

    </form>
    <!-- <input  type="number" placeholder="Quantity" class=" w-full mt-10 outline-none border-b-2 border-x-zinc-950"> -->



</template>


<style scoped></style>