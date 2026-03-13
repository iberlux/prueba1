<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <header class="mb-6">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <p v-if="subtitle" class="mt-2 text-slate-600">{{ subtitle }}</p>
  </header>
</template>
