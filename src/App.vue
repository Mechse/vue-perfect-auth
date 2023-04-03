<script setup>
const testLogin = (login) => {
  console.log("LOGIN: ", login)
} 

const googleTestLogin = () => {
  console.log("LOGIN", "GOOGLE")
}

const facebookTestLogin = () => {
  console.log("LOGIN", "FACEBOOK")
}

const appleTestLogin = () => {
  console.log("LOGIN", "APPLE")
}

const githubTestLogin = () => {
  console.log("LOGIN", "GITHUB")
}
</script>

<template>
<div class="pt-10 md:max-w-sm mx-auto flex flex-col justify-center gap-y-6">
  <AuthLogin :showDebug="true" @login="testLogin" signUpLink="/signup" :acceptGoogle="googleTestLogin" :acceptApple="appleTestLogin" :acceptFacebook="facebookTestLogin" :acceptGithub="githubTestLogin"/>
</div>
</template>

<style scoped>
</style>
