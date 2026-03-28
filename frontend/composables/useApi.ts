export const useApi = () => {
  const config = useRuntimeConfig()

  const baseURL = import.meta.server
    ? config.apiBaseInternal
    : config.public.apiBase

  const get = <T>(path: string) => {
    return $fetch<T>(path, { baseURL })
  }

  return { get }
}
