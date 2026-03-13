export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseInternal: process.env.NUXT_PUBLIC_API_BASE_INTERNAL || process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api'
    }
  },
  app: {
    head: {
      titleTemplate: '%s | Bikes Corp',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Bikes Corp: bicicletas corporativas, urbanas y de alto rendimiento.'
        }
      ]
    }
  }
})
