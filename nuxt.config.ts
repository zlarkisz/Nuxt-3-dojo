// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt 3 Dojo",
      meta: [{ name: "description", content: "Everithing about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY,

    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
