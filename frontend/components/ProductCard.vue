<script setup lang="ts">
defineProps<{
  product: {
    name: string
    slug: string
    short_description: string
    primary_image?: { image_url?: string | null }
  }
}>()
</script>

<template>
  <article class="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-200/30 hover:shadow-sky-950/30">
    <div class="relative overflow-hidden">
      <img
        :src="product.primary_image?.image_url || 'https://placehold.co/600x400?text=Bicicleta'"
        :alt="product.name"
        class="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
    </div>
    <div class="space-y-3 p-5">
      <h3 class="text-lg font-semibold text-white">{{ product.name }}</h3>
      <p class="text-sm leading-relaxed text-slate-300">{{ product.short_description }}</p>
      <NuxtLink :to="`/producto/${product.slug}`" class="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200">
        Ver detalle
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
