export const useApi = () => {
  const config = useRuntimeConfig()

  const apiFetch = <T>(path: string, options: Record<string, any> = {}) => {
    return $fetch<T>(`${config.public.apiBase}${path}`, options)
  }

  return { apiFetch }
}
