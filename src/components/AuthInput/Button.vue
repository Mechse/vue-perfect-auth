<script setup lang='ts'>
const props = defineProps({
  primaryColor: {
    type: String,
    default: "#2563eb"
  },
  hoverColor: {
    type: String,
    default: "#3b82f6"
  },
  textColor: {
    type: String,
    default: "#fff"
  }
})
</script>

<template>
<div>
    <button
    class="bg-color text-color inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
    <slot></slot>
    </button>
</div>
</template>

<style>
.bg-color {
    background-color: v-bind("props.primaryColor")
}
.bg-color:hover {
    background-color: v-bind("props.hoverColor")
}
.text-color {
    color: v-bind("props.textColor")
}
</style>