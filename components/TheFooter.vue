<script setup lang="ts">
import NavItem from "~/types/navTypes";

defineProps({
  footerLinks: {
    type: Array as () => Array<NavItem>,
    required: true,
  },
});
</script>

<template>
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li v-for="link in footerLinks" :key="link.name">
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </footer>
</template>
