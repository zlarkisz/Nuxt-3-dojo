<script setup lang="ts">
import productType from "~/types/productType";

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

definePageMeta({
  layout: "products",
});

const config = useRuntimeConfig();

const { data: products } = await useFetch<productType[]>(
  `${config.BASE_URL}/products`
);
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
