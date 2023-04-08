<script setup lang='ts'>
import { reactive, watch, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
const props = defineProps({
    primaryColor: {
    type: String,
    default: "#2563eb"
  },
  hoverColor: {
    type: String,
    default: "#3b82f6"
  },
  forgetPasswordLink: {
    type: String,
    default: ""
  },
  passwordPlaceholder:{
    type: String,
    default: "Password (min. 8 character)"
  }
})
const hasAtLeastOneSpecialChar = (value) => {
    const re = /^(?=.*[^A-Za-z0-9])[^&\\;<>]+$/;
    return re.test(value)
}
const hasAtLeasOneNumber = (value) => {
    const re = /.*[0-9].*/;
    return re.test(value)
}

const emit = defineEmits(['error', 'update:password'])
const showPassword = ref(false)
const state = reactive({
        password: ''
    })
const rules = {
    password: { required, hasAtLeastOneSpecialChar, hasAtLeasOneNumber, minLength: minLength(8), $autoDirty: true }
}
const v$ = useVuelidate(rules, state)
watch(() => v$.value.password.$errors, (newError) => {
    emit('error', newError)
})
</script>

<template>
<div>
        <div class="flex items-center justify-between">
                <label for="auth-password" class="text-sm font-bold text-gray-900 dark:text-gray-50"> Password </label>
                <a v-if="forgetPasswordLink!==''" :href="forgetPasswordLink" title="" class="text-color text-sm font-medium"> Forgot Password? </a>
        </div>
        <div class="mt-2 relative dark:text-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-lg">
                <input id="auth-password" v-model="state.password" @input="emit('update:password', state.password)" :type="showPassword ? 'text' : 'password'" name="" :placeholder="passwordPlaceholder" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600  dark:text-gray-50 dark:bg-gray-700 dark:border-gray-700">
                <div v-if="!showPassword" class="absolute top-3 right-0  mr-3 text-xl cursor-pointer text-gray-700 dark:text-gray-50 dark:bg-gray-700 dark:border-gray-700" @click="(showPassword = true)" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
                </div>
              <div
                v-else class=" mr-3 text-xl cursor-pointer text-gray-700 dark:text-gray-200 absolute top-3 right-0" @click="(showPassword = false)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
              </div>
        </div>
</div>
</template>

<style scoped>
.text-color {
    color: v-bind("props.primaryColor")
}
.text-color:hover {
    color: v-bind("props.hoverColor")
}
</style>