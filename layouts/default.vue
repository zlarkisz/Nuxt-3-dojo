<script setup lang="ts">
import NavItem from "~/types/navTypes";

const headerNavigation = ref<NavItem[]>([
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
    <TheHeader :nav-links="headerNavigation" />

    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>
