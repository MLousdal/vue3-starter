<script setup>
import { useHead } from '@vueuse/head'
import { computed, reactive } from 'vue'

const siteData = reactive({
  title: `Home page`,
  description: `Home page description...`,
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
      <h1>Home page!</h1>
      <p class="text-5">Vite + Vue 3 + Vue-Router + Vuex + Open-props</p>
    </header>
    <nav>
      <router-link :to="{ name: 'About' }">About Page</router-link>
      <router-link :to="{ name: 'OpenProps' }">OpenProps Page</router-link>
    </nav>
  </main>
</template>
