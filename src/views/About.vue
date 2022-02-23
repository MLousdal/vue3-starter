<script setup>
</script>

<template>
  <main class="wrapper preview">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <header>
      <h1>About page!</h1>
      <p class="text-5">Vite + Vue 3 + Vue-Router + Vuex + Open-props</p>
    </header>
    <nav>
      <router-link :to="{ name: 'Home' }">Home Page</router-link>
      <router-link :to="{ name: 'OpenProps' }">OpenProps Page</router-link>
    </nav>
  </main>
</template>
