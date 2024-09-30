
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const User = useUserStore()
const userId = ref('')

const callUser = async () => {
    await User.getUserById(userId.value)
}

</script>   

<template>
    <div>
        {{ User.user.id }}
        {{ User.user.name }}
    </div> 
    <input v-model="userId" type="text">
    <button @click="callUser">Get User</button>
</template>

<style scoped>

</style>