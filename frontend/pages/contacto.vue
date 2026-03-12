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
  <section class="mx-auto max-w-2xl">
    <SectionTitle title="Contacto" subtitle="Cuéntanos tus necesidades y te ayudamos a diseñar la solución." />

    <form class="space-y-4 rounded-lg border bg-white p-6" @submit.prevent="submitForm">
      <input v-model="form.full_name" required placeholder="Nombre completo" class="w-full rounded border px-3 py-2" />
      <input v-model="form.email" type="email" required placeholder="Email" class="w-full rounded border px-3 py-2" />
      <input v-model="form.phone" placeholder="Teléfono" class="w-full rounded border px-3 py-2" />
      <input v-model="form.subject" required placeholder="Asunto" class="w-full rounded border px-3 py-2" />
      <textarea v-model="form.message" required placeholder="Mensaje" rows="5" class="w-full rounded border px-3 py-2" />
      <button :disabled="loading" class="rounded bg-brand-700 px-4 py-2 font-semibold text-white">
        {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
      </button>
      <p v-if="success" class="text-sm text-green-700">{{ success }}</p>
    </form>
  </section>
</template>
