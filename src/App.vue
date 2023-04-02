<script setup>
const testLogin = (login) => {
  console.log("LOGIN: ", login)
} 
</script>

<template>
<div class="pt-10 md:max-w-lg mx-auto flex flex-col justify-center gap-y-6">
  <AuthLogin :showDebug="true" @login="testLogin"/>
</div>
</template>

<style scoped>
</style>
