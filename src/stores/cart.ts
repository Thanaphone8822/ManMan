import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'



export const useCartStore = defineStore('cart', () => {
    const cart = reactive<any[]>([])

    const view = ref(false);

    const addToCart = (item: any) => {
        item.quantity = 1
        cart.push(item)
    }

    const removeFromCart = (product: any) => cart.splice(cart.indexOf(product), 1)

    const isExist = (item: any) => cart.includes(item)

    const itemCount = () => cart.length

    const totalPrice = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const viewCart = () => view.value = !view.value

    const isViewCart = () => view.value

    const IncreaseQuantity = (item: any) => item.quantity < 20 ? item.quantity = item.quantity + 1 : null

    const decreaseQuantity = (item: any) => item.quantity > 0 ? item.quantity = item.quantity - 1 : null

    const viewQuantity = (item: any) => item.quantity

    return { cart, addToCart, removeFromCart, isExist, itemCount, totalPrice, isViewCart, viewCart, decreaseQuantity, IncreaseQuantity, viewQuantity }
})