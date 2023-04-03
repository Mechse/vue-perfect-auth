<script setup lang='ts'>
import {ref, computed} from "vue"
import { AuthThirdPartyFacebook, AuthThirdPartyGithub } from "../AuthThirdParty";
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
  signUpLink: {
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
  acceptGoogle: {
    type: Function,
    default: undefined
  },
  acceptFacebook: {
    type: Function,
    default: undefined
  },
  acceptGithub: {
    type: Function,
    default: undefined
  },
  acceptApple: {
    type: Function,
    default: undefined
  },
  passwordOnly: {
    type: Boolean,
    default: false
  },
  passwordPlaceholder:{
    type: String,
    default: "Password (min. 8 character)"
  }
})
const error = ref()
const user = ref({
  email: "",
  password: ""
})

const errorHandler = (e) => {
  error.value = e
}

const acceptThirdPartyAuth = () => {
  return props.acceptGoogle
}

const countThirdPartyAuth = computed(() => {
  let count = 0
  count += props.acceptApple ? 1 : 0
  count += props.acceptGoogle ? 1 : 0
  count += props.acceptFacebook ? 1 : 0
  count += props.acceptGithub ? 1 : 0
  return count
})
</script>

<template>
<div class="flex flex-col gap-y-6">
  <div class="text-center">
      <h1 class="mt-12 text-3xl font-bold text-gray-900">
        {{ props.title }}
      </h1>
      <p class="mt-4 text-sm font-medium text-gray-500">
        {{ props.subtitle }}
      </p>
  </div>
  <div :class="[acceptThirdPartyAuth() && 'mt-12', countThirdPartyAuth >= 3 ? 'flex-row' : 'flex-col']" class="flex gap-6">
    <AuthThirdPartyGoogle v-if="acceptGoogle" @click="acceptGoogle" :size="countThirdPartyAuth >= 3 ? 'small' : 'large'"/>
    <AuthThirdPartyFacebook v-if="acceptFacebook" @click="acceptFacebook" :size="countThirdPartyAuth >= 3 ? 'small' : 'large'"/>
    <AuthThirdPartyApple v-if="acceptApple" @click="acceptApple" :size="countThirdPartyAuth >= 3 ? 'small' : 'large'"/>
    <AuthThirdPartyGithub v-if="acceptGithub" @click="acceptGithub" :size="countThirdPartyAuth >= 3 ? 'small' : 'large'"/>
  </div>
  <div v-if="acceptThirdPartyAuth()" class="relative mt-2">
    <div class="absolute inset-0 flex items-center">
    <div class="w-full border-t border-gray-200" />
  </div>

  <div class="relative flex justify-center">
    <span class="px-2 text-sm text-gray-400 bg-white"> or </span>
  </div>
  </div>
  <form :class="!acceptThirdPartyAuth() && 'mt-6'" class="flex flex-col gap-y-6">
      <AuthEmail v-if="!passwordOnly" @error="errorHandler" v-model:email="user.email"/>
      <AuthPassword :forgetPasswordLink="forgetPasswordLink" :primaryColor="props.primaryColor" :hoverColor="props.hoverColor" @error="errorHandler" v-model:password="user.password" :passwordPlaceholder="passwordPlaceholder"/>
      <AuthButton @click.prevent="emit('login', user)" :primaryColor="props.primaryColor" :hoverColor="props.hoverColor">{{ props.buttonText }}</AuthButton>
      <div v-if="props.showDebug" class="flex flex-col gap-y-4">
        <p v-if="error && error.length > 0" class="bg-red-200 p-4">{{ error }}</p>
        <p v-if="user.email !== '' && user.password !== ''" class="bg-green-200 p-4">{{ user }}</p>
      </div>
      <div v-if="signUpLink !== ''" class="-mt-3 text-center">
        <p class="text-sm font-medium text-gray-900">
          Don't have an account? <router-link :to="signUpLink" title="" class="font-bold hover:underline cursor-pointer">
            Sign up now
          </router-link>
        </p>
      </div>
  </form>
</div>
</template>

<style>
</style>