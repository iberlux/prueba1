<script setup lang="ts">
const route = useRoute()
const selectedCategory = computed(() => route.query.categoria as string | undefined)
const { apiFetch } = useApi()

useSeoMeta({
  title: 'Catálogo',
  description: 'Explora nuestro catálogo corporativo de bicicletas.'
})

const { data: categories } = await useAsyncData('categories', () => apiFetch<any[]>('/categories/'))
const { data: products } = await useAsyncData(
  'products',
  () => apiFetch<{ results: any[] }>(`/products/${selectedCategory.value ? `?category__slug=${selectedCategory.value}` : ''}`),
  { watch: [selectedCategory] }
)
</script>

<template>
  <div>
    <SectionTitle title="Catálogo" subtitle="Encuentra la bicicleta ideal para tu operación." />

    <div class="mb-6 flex flex-wrap gap-2">
      <NuxtLink to="/productos" class="rounded border px-3 py-1 text-sm">Todas</NuxtLink>
      <NuxtLink
        v-for="category in categories || []"
        :key="category.slug"
        :to="`/productos?categoria=${category.slug}`"
        class="rounded border px-3 py-1 text-sm"
      >
        {{ category.name }}
      </NuxtLink>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="product in products?.results || []"
        :key="product.slug"
        :product="product"
      />
    </div>
  </div>
</template>
