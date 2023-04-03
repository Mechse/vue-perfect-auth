<script setup lang='ts'>
const props = defineProps({
    size: {
        type: String,
        default: "large"
    }
})
//@ts-ignore
import logo from "../../assets/logos/apple-logo.svg"
</script>

<template>
<button
type="button"
class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
>
    <img class="w-5 h-5" :class="size === 'large' && 'mr-2'" :src="logo" alt="">
    <p v-if="size === 'large'">Sign in with Apple</p>
</button>
</template>

<style>
</style>