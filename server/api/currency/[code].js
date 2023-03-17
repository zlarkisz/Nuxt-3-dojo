export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { CURRENCY_API_KEY } = useRuntimeConfig();
  console.log(code, CURRENCY_API_KEY);

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${CURRENCY_API_KEY}`;

  const { data } = await $fetch(uri);

  return data;
});
