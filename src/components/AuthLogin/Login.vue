<script setup lang='ts'>
import {ref} from "vue"
const emit = defineEmits(["login"])
const props = defineProps({
  title: {
    type: String,
    default: "Login"
  },
  subtitle: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi pulvinar venenatis non."
  },
  buttonText: {
    type: String,
    default: "Log In"
  },
  forgetPasswordLink: {
    type: String,
    default: ""
  },
  primaryColor: {
    type: String,
    default: "#2563eb"
  },
  hoverColor: {
    type: String,
    default: "#3b82f6"
  },
  showDebug: {
    type: Boolean,
    default: false
  },
})
const error = ref()
const user = ref({
  email: "",
  password: ""
})

const errorHandler = (e) => {
  error.value = e
}
</script>

<template>
<form class="flex flex-col gap-y-6">
    <div class="text-center">
      <h1 class="mt-12 text-3xl font-bold text-gray-900">
        {{ props.title }}
      </h1>
      <p class="mt-4 text-sm font-medium text-gray-500">
        {{ props.subtitle }}
      </p>
    </div>
    <AuthEmail @error="errorHandler" v-model:email="user.email"/>
    <AuthPassword :forgetPasswordLink="forgetPasswordLink" :primaryColor="props.primaryColor" :hoverColor="props.hoverColor" @error="errorHandler" v-model:password="user.password"/>
    <AuthButton @click.prevent="emit('login', user)" :primaryColor="props.primaryColor" :hoverColor="props.hoverColor">{{ props.buttonText }}</AuthButton>
    <div v-if="props.showDebug" class="flex flex-col gap-y-4">
      <p v-if="error && error.length > 0" class="bg-red-200 p-4">{{ error }}</p>
      <p v-if="user.email !== '' && user.password !== ''" class="bg-green-200 p-4">{{ user }}</p>
    </div>
</form>
</template>

<style>
</style>