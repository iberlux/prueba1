<script setup lang="ts">
const route = useRoute()
const { apiFetch } = useApi()

const { data: product, pending, error } = await useAsyncData(`product-${route.params.slug}`, () =>
  apiFetch<any>(`/products/${route.params.slug}/`)
)

useSeoMeta({
  title: product.value?.name || 'Producto',
  description: product.value?.short_description || 'Detalle de producto Bikes Corp'
})
</script>

<template>
  <article v-if="product" class="space-y-6">
    <SectionTitle :title="product.name" :subtitle="product.short_description" />

    <img
      :src="product.images?.[0]?.image_url || 'https://placehold.co/1200x600?text=Bicicleta'"
      :alt="product.name"
      class="h-72 w-full rounded-lg object-cover"
    />

    <p class="text-slate-700">{{ product.description }}</p>

    <section>
      <h3 class="mb-3 text-xl font-semibold">Especificaciones</h3>
      <ul class="grid gap-2 sm:grid-cols-2">
        <li
          v-for="spec in product.specifications || []"
          :key="`${spec.key}-${spec.value}`"
          class="rounded border bg-white px-3 py-2"
        >
          <span class="font-medium">{{ spec.key }}:</span> {{ spec.value }}
        </li>
      </ul>
    </section>
  </article>

  <p v-else-if="pending" class="text-slate-600">Cargando producto...</p>

  <p v-else-if="error" class="text-red-600">No se pudo cargar el producto. Intenta nuevamente.</p>

  <p v-else class="text-slate-600">No encontramos este producto.</p>
</template>
