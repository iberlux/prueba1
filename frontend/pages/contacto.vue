<script setup lang="ts">
const { apiFetch } = useApi()
const form = reactive({
  full_name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})
const loading = ref(false)
const success = ref('')

useSeoMeta({
  title: 'Contacto',
  description: 'Ponte en contacto con Bikes Corp para proyectos de movilidad empresarial.'
})

const submitForm = async () => {
  loading.value = true
  success.value = ''
  await apiFetch('/contact-messages/', { method: 'POST', body: form })
  success.value = 'Mensaje enviado correctamente.'
  Object.assign(form, { full_name: '', email: '', phone: '', subject: '', message: '' })
  loading.value = false
}
</script>

<template>
  <section class="mx-auto max-w-3xl section-shell">
    <SectionTitle title="Contacto" subtitle="Cuéntanos tus necesidades y te ayudamos a diseñar la solución." />

    <form class="space-y-4" @submit.prevent="submitForm">
      <input v-model="form.full_name" required placeholder="Nombre completo" class="input-field" />
      <input v-model="form.email" type="email" required placeholder="Email" class="input-field" />
      <input v-model="form.phone" placeholder="Teléfono" class="input-field" />
      <input v-model="form.subject" required placeholder="Asunto" class="input-field" />
      <textarea v-model="form.message" required placeholder="Mensaje" rows="5" class="input-field" />
      <button :disabled="loading" class="rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-70">
        {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
      </button>
      <p v-if="success" class="text-sm text-emerald-300">{{ success }}</p>
    </form>
  </section>
</template>
