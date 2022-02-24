<script setup>
import Link from '@/renderer/Link.vue'
</script>

<template>
  <main class="wrapper preview">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <header>
      <h1>About page!</h1>
      <p class="text-5">Vite + Vue 3 + Vite-plugin-ssr + Open-props</p>
    </header>
    <nav>
      <Link href="/">Home page</Link>
      <Link href="/open-props">OpenProps Page</Link>
    </nav>
  </main>
</template>
