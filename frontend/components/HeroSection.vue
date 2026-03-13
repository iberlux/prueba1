<template>
  <section class="section-shell relative overflow-hidden">
    <div class="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
    <div class="absolute -bottom-20 left-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />

    <p class="mb-4 inline-flex items-center rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
      Movilidad empresarial premium
    </p>
    <h1 class="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
      Rediseña tu flota con bicicletas modernas, eficientes y sostenibles.
    </h1>
    <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
      Combinamos diseño, tecnología y logística para que tu empresa implemente soluciones de movilidad con impacto real en costos, bienestar y huella ambiental.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink to="/productos" class="rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-200">
        Explorar catálogo
      </NuxtLink>
      <NuxtLink to="/contacto" class="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
        Agendar asesoría
      </NuxtLink>
    </div>
  </section>
</template>
