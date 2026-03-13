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
  <article v-if="product" class="section-shell space-y-6">
    <SectionTitle :title="product.name" :subtitle="product.short_description" />

    <img
      :src="product.images?.[0]?.image_url || 'https://placehold.co/1200x600?text=Bicicleta'"
      :alt="product.name"
      class="h-72 w-full rounded-2xl border border-white/10 object-cover"
    />

    <p class="leading-relaxed text-slate-200">{{ product.description }}</p>

    <section>
      <h3 class="mb-3 text-xl font-semibold text-white">Especificaciones</h3>
      <ul class="grid gap-3 sm:grid-cols-2">
        <li
          v-for="spec in product.specifications || []"
          :key="`${spec.key}-${spec.value}`"
          class="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-200"
        >
          <span class="font-medium text-white">{{ spec.key }}:</span> {{ spec.value }}
        </li>
      </ul>
    </section>
  </article>

  <p v-else-if="pending" class="text-slate-300">Cargando producto...</p>

  <p v-else-if="error" class="text-rose-300">No se pudo cargar el producto. Intenta nuevamente.</p>

  <p v-else class="text-slate-300">No encontramos este producto.</p>
</template>
