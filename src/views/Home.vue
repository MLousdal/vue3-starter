<script setup>
</script>

<template>
  <main class="wrapper">
    <header>
      <h1>Home page!</h1>
      <p class="text-5">Vite + Vue 3 + Router + Vuex</p>
    </header>
    <router-link :to="{ name: 'About' }">About Page</router-link>
    <button value="button"></button>
  </main>
</template>
