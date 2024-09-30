<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import { reactive, ref } from 'vue';
import { type Product, useProductStore } from './stores/product';

import LeftMenu from './components/LeftMenu.vue';
import ModalProduct from './components/ModalProduct.vue';

const product = useProductStore()

product.getInitialProducts()

// const form = reactive<Product>({
//   id: 0,
//   name: '',
//   price: 0,
//   image: 'https://picsum.photos/200/300?random=1',
// })

// const submit = () => {
//   form.id = product.productLists.length + 1
//   product.createProduct(form)
// }

// const reset = () => {
//   form.id = 0
//   form.name = ''
//   form.price = 0
//   form.image = 'https://picsum.photos/id/237/200/300'
// }

</script>

<template>
  <ModalProduct :set-item="product.setProductforModal" />

  <Navbar>
    <RouterView />
  </Navbar>



  <!-- <form @submit.prevent="submit">
    <input v-model="form.title" type="text">
    <input v-model="form.price" type="number">
    <input v-model="form.image" type="text">

    <button class="btn" @click="reset" type="button">Reset</button>
    <button class="btn btn-primary" type="submit">Create</button>
  </form>

  <ul class="space-y-2 w-200 p-4">
    <li class="p-2 w-fit bg-slate-300" v-for="item in product.productLists">
      <img :src="item.image" />
      <p>{{ item.title }}</p>
    </li>
  </ul> -->


</template>

<style scoped></style>
