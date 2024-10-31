// Конфигурация Nuxt 3
export default defineNuxtConfig({
  // Дополнительные параметры конфигурации можно добавить здесь
  runtimeConfig: {
    public: {
      // Доступно на клиенте и сервере
      apiUrl: process.env.NUXT_PUBLIC_API_URL, // API URL из переменной среды
    },
    // Доступно только на сервере
    apiKey: process.env.NUXT_PUBLIC_API_KEY, // API ключ из переменной среды
  },

  compatibilityDate: "2024-10-31"
})