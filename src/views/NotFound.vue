<script setup>
import { useHead } from '@vueuse/head'
import { computed, reactive } from 'vue'

const siteData = reactive({
  title: `Page not found`,
  description: `No description for this page...`,
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
    <header>
      <h1>Page not found</h1>
    </header>
    <router-link :to="{ name: 'Home' }">Back home</router-link>
  </main>
</template>
