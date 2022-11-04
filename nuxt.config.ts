// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  dir: {
    //pages: "~/ui/pages/Home",
  },
  components: {
    dirs: ["ui/core/components"],
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/assets/styles/quasar.sass'
  ],
  build: {
    transpile: ["quasar"],
  },
  plugins: [
    '~/plugins/quasar.client.ts'
  ],
  vite: {
    plugins: [
      /* vue({
        template: { transformAssetUrls }
      }), */
      quasar({
        sassVariables: "~/assets/styles/quasar-variables.sass",
      }),
    ],

  },
});
