<script setup lang="ts">
import productType from "~/types/productType";

definePageMeta({
  layout: "products",
});

const route = useRoute();
const config = useRuntimeConfig();

const { data: product } = await useFetch<productType>(
  `${config.BASE_URL}/products/${route.params.id}`,
  {
    key: `${route.params.id}`,
  }
);

if (!product.value) {
  showError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}
</script>

<template>
  <Head>
    <Title>Nuxt Dojo | {{ product?.title }}</Title>
    <Meta name="description" :content="product?.description" />
    <Meta property="og:description" :content="product?.description" />
    <Meta property="og:image" :content="product?.image" />
  </Head>
  <ProductDetails v-if="product" :product="product" />
</template>
