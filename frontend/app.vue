<template>
  <div class="relative min-h-screen text-slate-100">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.16),transparent_55%)]" />
    <MainHeader />
    <main class="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
    <MainFooter />
  </div>
</template>
