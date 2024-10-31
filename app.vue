<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <div>
    <h1>Текущий API URL: {{ apiUrl }}</h1> <!-- Отображает текущий API URL -->
  </div>
</template>

<script setup>
const config = useRuntimeConfig() // Получение конфигурации времени выполнения
const apiUrl = config.public.apiUrl // Доступ к API URL
</script>
