export const useApi = () => {
  const config = useRuntimeConfig()

  const base = import.meta.server ? config.public.apiBaseInternal : config.public.apiBase

  const apiFetch = <T>(path: string, options: Record<string, any> = {}) => {
    return $fetch<T>(`${base}${path}`, options)
  }

  return { apiFetch }
}
