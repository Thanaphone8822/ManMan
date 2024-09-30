<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { ref, computed } from 'vue'


const product = useProductStore()

const categories = computed(() => {
    let newNameList = product.categoryTypes.map((name) => {
        console.log(name);
        return ({
            path: name,
            name: name
        })
    })

    newNameList.forEach((item) => {
       if(item.name == "men's clothing") item.name = "Men"
       if(item.name == "women's clothing") item.name = "Women"
    })


    return newNameList
})


</script>


<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-primary drawer-button"><img
                    src="https://api.iconify.design/lucide:align-justify.svg" alt=""></label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div class="mb-5 text-xl font-bold border-slate-900 underline">Cetegories</div>
                <!-- Sidebar content here -->
                <li v-for="categoryName in categories" class="mb-3 text-lg">
                    <RouterLink :to="`/category/${categoryName.path}`" >{{ categoryName.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped></style>