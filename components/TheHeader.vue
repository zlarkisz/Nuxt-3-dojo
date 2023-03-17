<script setup lang="ts">
import NavItem from "~/types/navTypes";

defineProps({
  navLinks: {
    type: Array as () => Array<NavItem>,
    required: true,
  },
});
</script>

<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo Merch</NuxtLink>

      <ul class="flex gap-4">
        <li v-for="link in navLinks" :key="link.name" class="btn">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
