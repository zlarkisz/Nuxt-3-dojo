<script setup lang="ts">
// const { data } = await useFetch("/api/zlarkisz?name=zlarkisz", {
//   method: "POST",
//   body: JSON.stringify({ age: 25 }),
// });
const { data } = await useFetch("/api/currency/GBP");
</script>

<template>
  <div>
    <h1>About</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
      consequatur quia reiciendis maiores voluptatem optio temporibus quo libero
      dolorem dolore.
    </p>

    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped>
h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  margin: 20px 0;
}
</style>
