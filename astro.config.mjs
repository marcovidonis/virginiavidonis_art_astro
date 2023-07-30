import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'

import { loadEnv } from "vite";
const { STORYBLOK_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        pageTitle: 'storyblok/PageTitle',
        pageContent: 'storyblok/PageContent',
        tag: 'storyblok/Tag',
        imagePost: 'storyblok/ImagePost',
        postsList: 'storyblok/PostsList',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
