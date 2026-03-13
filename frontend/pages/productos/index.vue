<script setup lang="ts">
const route = useRoute()
const selectedCategory = computed(() => route.query.categoria as string | undefined)
const { apiFetch } = useApi()

type Category = {
  name: string
  slug: string
}

type Product = {
  name: string
  slug: string
  short_description: string
  primary_image?: { image_url?: string | null }
}

type PaginatedResponse<T> = {
  results?: T[] | null
}

const toList = <T>(payload: T[] | PaginatedResponse<T> | null | undefined): T[] => {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  return []
}

useSeoMeta({
  title: 'Catálogo',
  description: 'Explora nuestro catálogo corporativo de bicicletas.'
})

const { data: categoriesResponse } = await useAsyncData('categories', () =>
  apiFetch<Category[] | PaginatedResponse<Category>>('/categories/')
)

const { data: productsResponse } = await useAsyncData(
  'products',
  () => apiFetch<Product[] | PaginatedResponse<Product>>(`/products/${selectedCategory.value ? `?category__slug=${selectedCategory.value}` : ''}`),
  { watch: [selectedCategory] }
)

const categories = computed(() => toList(categoriesResponse.value))
const products = computed(() => toList(productsResponse.value))
</script>

<template>
  <div class="section-shell">
    <SectionTitle title="Catálogo" subtitle="Encuentra la bicicleta ideal para tu operación." />

    <div class="mb-8 flex flex-wrap gap-2">
      <NuxtLink to="/productos" class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/10">Todas</NuxtLink>
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/productos?categoria=${category.slug}`"
        class="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300/60 hover:bg-sky-300/10"
      >
        {{ category.name }}
      </NuxtLink>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.slug"
        :product="product"
      />
    </div>
  </div>
</template>
