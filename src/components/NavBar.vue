<script setup lang="ts">

import LeftMenu from './LeftMenu.vue';
import { useCartStore } from '@/stores/cart';

const { itemCount, viewCart, totalPrice } = useCartStore()



import { ref, onMounted, onUnmounted } from 'vue';
import Cc from './cc.vue';
import ViewCart from './ViewCart.vue';

const isScrollingDown = ref(false);
let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  isScrollingDown.value = currentScrollPosition > lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// const reload =(()=>{
//   window.location.reload()
// })

</script>
<template>

  <div
    :class="['fixed top-0  left-0 w-full z-50 transition-transform duration-300', { '-translate-y-fit': isScrollingDown, 'translate-y-0': !isScrollingDown }]">
    <div class="flex navbar bg-base-100 shadow-lg rounded-sm">
      <div class="flex">
        <LeftMenu />
      </div>
      <div class="flex-1 justify-center">

        <RouterLink :to="`/`" class="flex btn btn-ghost text-xl">daisyUI</RouterLink>

      </div>
      <div class="flex-none">
        <!-- Cart Dropdown -->

        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-sm indicator-item">{{ itemCount() }}</span>
            </div>
          </div>
          <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-80 shadow">
            <div class="card-body">
              <span class="text-lg font-bold">{{ itemCount() }} Items</span>
              <span class="text-info">Subtotal: {{ totalPrice() }}</span>
              <div class="card-actions">
                <button @click="viewCart()" class="btn btn-primary btn-block">View Cart</button>
                <ViewCart />
                <RouterLink to="/payment" class=" btn btn-primary btn-block">Payment</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Dropdown -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Profile Picture"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <RouterLink to="/profile" class="justify-between">
                Profile
                <span class="badge">New</span>
              </RouterLink>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="content mt-[4rem]">
    <!-- Add your page content here -->

    <slot />
  </div>

</template>


<style scoped></style>