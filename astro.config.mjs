import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'

import { loadEnv } from "vite";
const { STORYBLOK_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        pageTitle: 'storyblok/PageTitle',
        tag: 'storyblok/Tag',
        imagePost: 'storyblok/ImagePost',

        // TODO how can I define imagePost differently,
        // whether it's used inside a Grid or for a separate page?
        // imagePost: 'storyblok/ImagePost',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
