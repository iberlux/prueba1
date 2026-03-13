<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <header class="mb-6 md:mb-8">
    <h2 class="text-2xl font-semibold tracking-tight text-white md:text-3xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">{{ subtitle }}</p>
  </header>
</template>
