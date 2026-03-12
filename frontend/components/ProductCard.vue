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
  <article class="overflow-hidden rounded-lg border bg-white shadow-sm">
    <img
      :src="product.primary_image?.image_url || 'https://placehold.co/600x400?text=Bicicleta'"
      :alt="product.name"
      class="h-48 w-full object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="mt-2 text-sm text-slate-600">{{ product.short_description }}</p>
      <NuxtLink :to="`/producto/${product.slug}`" class="mt-4 inline-block text-sm font-semibold text-brand-700">
        Ver detalle →
      </NuxtLink>
    </div>
  </article>
</template>
