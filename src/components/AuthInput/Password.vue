<script setup lang='ts'>
import { reactive, watch } from 'vue';
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
                <label for="auth-password" class="text-sm font-bold text-gray-900"> Password </label>
                <a v-if="forgetPasswordLink!==''" :href="forgetPasswordLink" title="" class="text-color text-sm font-medium"> Forgot Password? </a>
        </div>
        <div class="mt-2">
                <input id="auth-password" v-model="state.password" @input="emit('update:password', state.password)" type="password" name="" placeholder="Password (min. 8 character)" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600 dark:bg-white">
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