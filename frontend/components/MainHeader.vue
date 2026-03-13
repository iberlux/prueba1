<template>
  <header class="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-white sm:text-xl">
        Bikes <span class="text-sky-300">Corp</span>
      </NuxtLink>
      <ul class="flex items-center gap-2 text-sm font-medium text-slate-200 sm:gap-3">
        <li><NuxtLink to="/" class="rounded-full px-4 py-2 transition hover:bg-white/10">Home</NuxtLink></li>
        <li><NuxtLink to="/productos" class="rounded-full px-4 py-2 transition hover:bg-white/10">Catálogo</NuxtLink></li>
        <li><NuxtLink to="/contacto" class="rounded-full bg-sky-300/15 px-4 py-2 text-sky-100 ring-1 ring-sky-200/25 transition hover:bg-sky-300/25">Contacto</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
