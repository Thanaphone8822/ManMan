import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user-store', () => {
    const user = ref({
        address: '',
        email: '',
        id: 0,
        name: "",
        phone: 0
    })

    const getUserById = async (id: string | number) => {
        const res = await fetch(`http://localhost:3000/api/user/${id}`).then(res => res.json())

        if (res && res.code != 10) return
        console.log(res);

        user.value = res.data
    }

    return { user, getUserById }
})
