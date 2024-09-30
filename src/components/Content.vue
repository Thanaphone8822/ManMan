<script setup lang="ts">

import { computed, ref } from 'vue';
import { useProductStore, type Product } from '../stores/product';
import { useCartStore } from '@/stores/cart';
import Cc from './cc.vue';

const product = useProductStore()
const numberItem = ref()

const { addToCart, removeFromCart, isExist } = useCartStore();

const CategoryName = defineModel<string>('CategoryName')


const listChucks = computed(() => {
    return product.productLists.slice(0, numberItem.value)
})

const filterList = computed(() => {
    if (!CategoryName.value) return listChucks.value
    return listChucks.value.filter(item => item.category === CategoryName.value)
})  


</script>
<template>
    <!-- <input v-model="numberItem" type="number"> -->
     
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5">

        <div v-for="productItem in filterList" :key="productItem.id" class="card bg-base-100 w-full h-120 hover:shadow-2xl">
            <figure @click="product.openModal(productItem)">
                <img class="object-contain w-96 h-96" :src="productItem.image" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ productItem.title }}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="card-actions justify-between">
                    <span class="badge badge-accent my-auto">{{ `${productItem.price} $` }}</span>
                    <button @click="addToCart(productItem)" :disabled="isExist(productItem)" class="btn btn-primary">Buy
                        Now</button>
                </div>
            </div>
        </div>

    </section>


</template>


<style scoped></style>