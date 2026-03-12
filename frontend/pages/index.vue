<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'Bikes Corp ayuda a empresas a implementar flotas de bicicletas eficientes.'
})

const { apiFetch } = useApi()
const { data: products } = await useAsyncData('featured-products', () =>
  apiFetch<{ results: any[] }>('/products/?is_featured=true')
)
</script>

<template>
  <div class="space-y-10">
    <HeroSection />

    <section>
      <SectionTitle
        title="Productos destacados"
        subtitle="Modelos seleccionados para movilidad urbana y logística empresarial."
      />
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="product in products?.results || []"
          :key="product.slug"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>
