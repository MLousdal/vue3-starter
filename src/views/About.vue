<script setup>
import { useHead } from '@vueuse/head'
import { computed, reactive } from 'vue'

const siteData = reactive({
  title: `About page`,
  description: `About page description...`,
})

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
})
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
