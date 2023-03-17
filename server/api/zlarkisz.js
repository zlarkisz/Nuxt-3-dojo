export default defineEventHandler(async (event) => {
  // handle query parameters
  const query = getQuery(event);

  // handle POST body
  const body = await readBody(event);

  // api call with private key
  const { CURRENCY_API_KEY } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_API_KEY}`
  );

  return {
    message: `Hello, ${query.name}! You are ${body.age} years old.`,
    data,
  };
});
