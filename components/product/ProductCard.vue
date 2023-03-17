<script setup lang="ts">
import productType from "~/types/productType";

const { product } = defineProps<{ product: productType }>();
</script>

<template>
  <div class="card text-center">
    <img
      :src="product.image"
      alt="product thumb"
      class="max-h-[120px] max-w-[70%] mx-auto"
    />

    <p class="font-bold text-gray-500 mr-4 truncate">{{ product.title }}</p>

    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">{{ product.title }}</p>
    </NuxtLink>
  </div>
</template>
