<script setup lang="ts">
import NavItem from "~/types/navTypes";

const footerLinks = ref<NavItem[]>([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
]);
</script>

<template>
  <div>
    <TheHeader :nav-links="[]" />

    <main class="container mx-auto p-4">
      <slot />
    </main>

    <TheFooter :footer-links="footerLinks" />
  </div>
</template>
