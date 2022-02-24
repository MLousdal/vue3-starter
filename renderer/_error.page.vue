<template>
  <main class="wrapper preview" v-if="is404">
    <header>
      <h1>Page not found</h1>
    </header>
    <Link href="/">Home page</Link>
  </main>
</template>

<script setup>
defineProps(['is404'])
import Link from '@/renderer/Link.vue'
</script>
