<script setup lang='ts'>
import { reactive, watch } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
const emit = defineEmits(['error', 'update:email'])
const state = reactive({
    email: ''
})
const rules = {
    email: { required, email, $autoDirty: true }
}
const v$ = useVuelidate(rules, state)
watch(() => v$.value.email.$errors, (newError) => {
    emit('error', newError)
})
</script>

<template>
    <div class="w-full">
        <label for="auth-email" class="text-sm font-bold text-gray-900 dark:text-gray-50"> Email </label>
        <div class="mt-2">
            <input id="auth-email" v-model="state.email" @input="emit('update:email', state.email)" type="email" name=""
                placeholder="Email address"
                class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600 dark:text-gray-50 dark:bg-gray-700 dark:border-gray-700">
        </div>
    </div>
</template>